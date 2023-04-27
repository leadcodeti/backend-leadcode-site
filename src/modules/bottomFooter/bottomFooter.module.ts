import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BottomFooterController } from './bottomFooter.controller';
import { BottomFooterService } from './bottomFooter.service';
import { PrismaBottomFooterRepository } from './repositories/prisma/prismaBottomFooter.repository';

@Module({
  controllers: [BottomFooterController],
  providers: [
    BottomFooterService,
    PrismaService,
    {
      provide: 'BottomFooterRepository',
      useClass: PrismaBottomFooterRepository,
    },
  ],
})
export class BottomFooterModule {}
