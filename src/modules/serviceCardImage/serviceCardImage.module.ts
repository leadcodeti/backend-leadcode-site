import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { ServiceCardImageController } from './serviceCardImage.controller';
import { ServiceCardImageService } from './serviceCardImage.service';
import { PrismaServiceCardImageRepository } from './repositories/prisma/prismaServiceCardImage.repository';

@Module({
  controllers: [ServiceCardImageController],
  providers: [
    ServiceCardImageService,
    PrismaService,
    FileService,
    {
      provide: 'ServiceCardImageRepository',
      useClass: PrismaServiceCardImageRepository,
    },
  ],
})
export class ServiceCardImageModule {}
