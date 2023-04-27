import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';
import { ProjectSectionController } from './projectSection.controller';
import { ProjectSectionService } from './projectSection.service';
import { PrismaProjectSectionRepository } from './repositories/prisma/prismaProjectSection.repository';

@Module({
  controllers: [ProjectSectionController],
  providers: [
    ProjectSectionService,
    PrismaService,
    {
      provide: 'ProjectSectionRepository',
      useClass: PrismaProjectSectionRepository,
    },
  ],
})
export class ProjectSectionModule {}
