import { Injectable, BadRequestException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class StorageService {
  private s3: AWS.S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      endpoint: this.configService.get<string>('MINIO_ENDPOINT'),
      accessKeyId: this.configService.get<string>('MINIO_ROOT_USER'),
      secretAccessKey: this.configService.get<string>('MINIO_ROOT_PASSWORD'),
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    });
  }

  async uploadFile(
    file: Express.Multer.File,
    bucketName: string,
  ): Promise<{ url: string }> {
    const fileStream = Readable.from(file.buffer);
    console.log(
      this.configService.get<string>('ENDPOINT', 'MINIO_ENDPOINT'),
      this.configService.get<string>('ROOT_USER', 'MINIO_ROOT_USER'),
      this.configService.get<string>('PASSWORD', 'MINIO_ROOT_PASSWORD'),
    );

    try {
      await this.s3
        .upload({
          Bucket: bucketName,
          Key: file.originalname,
          Body: fileStream,
          ContentType: file.mimetype,
        })
        .promise();

      return {
        url: `${this.configService.get<string>(
          'MINIO_ENDPOINT',
        )}/${bucketName}/${file.originalname}`,
      };
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Erro ao fazer upload do arquivo');
    }
  }

  async getFile(fileKey: string, bucketName: string): Promise<Buffer> {
    try {
      const data = await this.s3
        .getObject({ Bucket: bucketName, Key: fileKey })
        .promise();
      return data.Body as Buffer;
    } catch (error) {
      throw new BadRequestException('Arquivo não encontrado');
    }
  }

  async deleteFile(fileKey: string, bucketName: string): Promise<void> {
    try {
      await this.s3
        .deleteObject({ Bucket: bucketName, Key: fileKey })
        .promise();
    } catch (error) {
      throw new BadRequestException('Erro ao deletar arquivo');
    }
  }

  async listFiles(bucketName: string): Promise<string[]> {
    try {
      const response = await this.s3
        .listObjectsV2({ Bucket: bucketName })
        .promise();
      return response.Contents?.map((item) => item.Key) || [];
    } catch (error) {
      throw new BadRequestException('Erro ao listar arquivos');
    }
  }
}
