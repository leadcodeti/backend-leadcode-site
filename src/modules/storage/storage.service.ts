import { Injectable, BadRequestException } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Readable } from 'stream';

@Injectable()
export class StorageService {
  private s3: AWS.S3;

  constructor(private readonly configService: ConfigService) {
    this.s3 = new AWS.S3({
      endpoint: this.configService.get<string>('minio.endpoint'),
      accessKeyId: this.configService.get<string>('minio.root_user'),
      secretAccessKey: this.configService.get<string>('minio.root_password'),
      s3ForcePathStyle: true,
      signatureVersion: 'v4',
    });
  }

  private async ensureBucketExists(bucketName: string): Promise<void> {
    try {
      await this.s3.headBucket({ Bucket: bucketName }).promise();
    } catch (error) {
      if (error.statusCode === 404) {
        await this.s3.createBucket({ Bucket: bucketName }).promise();
      } else {
        console.error('Erro ao verificar/criar bucket:', error);
        throw new BadRequestException('Erro ao verificar/criar bucket');
      }
    }
  }

  async uploadFile(
    file: Express.Multer.File,
    bucketName: string,
  ): Promise<{ url: string }> {
    const fileStream = Readable.from(file.buffer);
    const endpoint = this.configService.get<string>('minio.endpoint');

    try {
      await this.ensureBucketExists(bucketName);
      await this.s3
        .upload({
          Bucket: bucketName,
          Key: file.originalname,
          Body: fileStream,
          ContentType: file.mimetype,
        })
        .promise();

      return { url: `${endpoint}/${bucketName}/${file.originalname}` };
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      throw new BadRequestException('Erro ao fazer upload do arquivo');
    }
  }

  async getSignedUrl(fileKey: string, bucketName: string): Promise<string> {
    try {
      return await this.s3.getSignedUrlPromise('getObject', {
        Bucket: bucketName,
        Key: fileKey,
        Expires: 60 * 60,
      });
    } catch (error) {
      console.error('Erro ao gerar URL assinada:', error);
      throw new BadRequestException('Erro ao obter URL assinada');
    }
  }

  async deleteFile(fileKey: string, bucketName: string): Promise<void> {
    try {
      await this.s3
        .deleteObject({ Bucket: bucketName, Key: fileKey })
        .promise();
    } catch (error) {
      console.error('Erro ao deletar arquivo:', error);
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
      console.error('Erro ao listar arquivos:', error);
      throw new BadRequestException('Erro ao listar arquivos');
    }
  }
}
