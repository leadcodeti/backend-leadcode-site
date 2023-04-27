import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';
import { TestemonialSectionController } from './testemonialSection.controller';
import { TestemonialSectionService } from './testemonialSection.service';
import { PrismaTestemonialSectionRepository } from './repositories/prisma/prismaTestemonialSectionrepository';

@Module({
  controllers: [TestemonialSectionController],
  providers: [
    TestemonialSectionService,
    PrismaService,
    {
      provide: 'TestemonialSectionRepository',
      useClass: PrismaTestemonialSectionRepository,
    },
  ],
})
export class TestemonialSectionModule {}
