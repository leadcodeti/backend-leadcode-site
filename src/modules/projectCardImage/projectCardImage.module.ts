import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { ProjectCardImageController } from './projectCardImage.controller';
import { ProjectCardImageService } from './projectCardImage.service';
import { PrismaProjectCardImageRepository } from './repositories/prisma/prismaProjectCardImage.repository';
import { PrismaHomeRepository } from '../home/repositories/prisma/prismaHome.repository';

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
    { provide: 'HomeRepository', useClass: PrismaHomeRepository },
  ],
})
export class ProjectCardImageModule {}
