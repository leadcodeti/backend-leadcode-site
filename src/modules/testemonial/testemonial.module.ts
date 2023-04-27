import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TestemonialController } from './testemonial.controller';
import { TestemonialService } from './testemonial.service';
import { PrismaTestemoniallRepository } from './repositories/prisma/prismaTestemonial.repository';
@Module({
  controllers: [TestemonialController],
  providers: [
    TestemonialService,
    PrismaService,
    {
      provide: 'TestemonialRepository',
      useClass: PrismaTestemoniallRepository,
    },
  ],
})
export class TestemonialModule {}
