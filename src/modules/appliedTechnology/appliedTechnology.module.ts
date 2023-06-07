import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { AppliedTechnologyService } from './appliedTechnology.service';
import { PrismaAppliedTechnologyRepository } from './repositories/prisma/prismaAppliedTechnology.repository';
import { AppliedTechnologyController } from './appliedTechnology.controller';

@Module({
  controllers: [AppliedTechnologyController],
  providers: [
    AppliedTechnologyService,
    PrismaService,
    {
      provide: 'AppliedTechnologyRepository',
      useClass: PrismaAppliedTechnologyRepository,
    },
  ],
})
export class AppliedTechnologyModule {}
