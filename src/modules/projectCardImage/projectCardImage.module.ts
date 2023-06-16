import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { ProjectCardImageController } from './projectCardImage.controller';
import { ProjectCardImageService } from './projectCardImage.service';
import { PrismaProjectCardImageRepository } from './repositories/prisma/prismaProjectCardImage.repository';
import { PrismaProjectCardRepository } from '../projectCard/repositories/prisma/prismaProjectCard.repository';
import { SharpService } from 'config/sharpConfig';

@Module({
  controllers: [ProjectCardImageController],
  providers: [
    ProjectCardImageService,
    PrismaService,
    FileService,
    SharpService,
    {
      provide: 'ProjectCardImageRepository',
      useClass: PrismaProjectCardImageRepository,
    },
    {
      provide: 'ProjectCardRepository',
      useClass: PrismaProjectCardRepository,
    },
  ],
})
export class ProjectCardImageModule {}
