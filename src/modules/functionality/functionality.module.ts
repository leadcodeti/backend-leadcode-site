import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FunctionalityController } from './functionality.controller';
import { FunctionalityService } from './functionality.service';
import { PrismaFunctionalityRepository } from './repositories/prisma/prismaFunctionality.repository';

@Module({
  controllers: [FunctionalityController],
  providers: [
    FunctionalityService,
    PrismaService,
    {
      provide: 'FunctionalityRepository',
      useClass: PrismaFunctionalityRepository,
    },
  ],
})
export class FunctionalityModule {}
