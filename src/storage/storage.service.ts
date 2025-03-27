import { Injectable, BadRequestException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class StorageService {
  private s3: AWS.S3;
  private bucketName: string;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      endpoint: this.configService.get<string>('MINIO_ENDPOINT'),
      accessKeyId: this.configService.get<string>('MINIO_ROOT_USER'),
      secretAccessKey: this.configService.get<string>('MINIO_ROOT_PASSWORD'),
      s3ForcePathStyle: true, // Necessário para MinIO
      signatureVersion: 'v4',
    });

    this.bucketName =
      this.configService.get<string>('MINIO_BUCKET') || 'uploads';
  }

  async uploadFile(file: Express.Multer.File): Promise<{ url: string }> {
    const fileStream = Readable.from(file.buffer);

    try {
      await this.s3
        .upload({
          Bucket: this.bucketName,
          Key: file.originalname,
          Body: fileStream,
          ContentType: file.mimetype,
        })
        .promise();

      return {
        url: `${this.configService.get<string>('MINIO_PUBLIC_URL')}/${
          file.originalname
        }`,
      };
    } catch (error) {
      throw new BadRequestException('Erro ao fazer upload do arquivo');
    }
  }

  async getFile(fileKey: string): Promise<Buffer> {
    try {
      const data = await this.s3
        .getObject({ Bucket: this.bucketName, Key: fileKey })
        .promise();
      return data.Body as Buffer;
    } catch (error) {
      throw new BadRequestException('Arquivo não encontrado');
    }
  }

  async deleteFile(fileKey: string): Promise<void> {
    try {
      await this.s3
        .deleteObject({ Bucket: this.bucketName, Key: fileKey })
        .promise();
    } catch (error) {
      throw new BadRequestException('Erro ao deletar arquivo');
    }
  }

  async listFiles(): Promise<string[]> {
    try {
      const response = await this.s3
        .listObjectsV2({ Bucket: this.bucketName })
        .promise();
      return response.Contents?.map((item) => item.Key) || [];
    } catch (error) {
      throw new BadRequestException('Erro ao listar arquivos');
    }
  }
}
