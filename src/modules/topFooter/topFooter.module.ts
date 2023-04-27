import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TopFooterController } from './topFooter.controller';
import { TopFooterService } from './topFooter.service';
import { PrismaTopFooterRepository } from './repositories/prisma/prismaTopFooter.repository';
@Module({
  controllers: [TopFooterController],
  providers: [
    TopFooterService,
    PrismaService,
    {
      provide: 'TopFooterRepository',
      useClass: PrismaTopFooterRepository,
    },
  ],
})
export class TopFooterModule {}
