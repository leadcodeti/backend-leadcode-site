import { Module } from '@nestjs/common';
import { PrismaProjectCardRepository } from './repositories/prisma/prismaProjectCard.repository';
import { ProjectCardService } from './projectCard.service';
import { ProjectCardController } from './projectCard.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ProjectCardController],
  providers: [
    ProjectCardService,
    PrismaService,
    {
      provide: 'ProjectCardRepository',
      useClass: PrismaProjectCardRepository,
    },
  ],
})
export class ProjectCardModule {}
