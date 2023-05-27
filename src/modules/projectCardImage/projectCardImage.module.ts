import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { ProjectCardImageController } from './projectCardImage.controller';
import { ProjectCardImageService } from './projectCardImage.service';
import { PrismaProjectCardImageRepository } from './repositories/prisma/prismaProjectCardImage.repository';

@Module({
  controllers: [ProjectCardImageController],
  providers: [
    ProjectCardImageService,
    PrismaService,
    FileService,
    {
      provide: 'ProjectCardImageRepository',
      useClass: PrismaProjectCardImageRepository,
    },
  ],
})
export class ProjectCardImageModule {}
