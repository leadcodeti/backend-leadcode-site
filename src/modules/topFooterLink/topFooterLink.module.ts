import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { TopFooterLinkController } from './topFooterLink.controller';
import { TopFooterLinkService } from './topFooterLink.service';
import { PrismaTopFooterLinkRepository } from './repositories/prisma/prismaTopFooterLink.repository';
@Module({
  controllers: [TopFooterLinkController],
  providers: [
    TopFooterLinkService,
    PrismaService,
    {
      provide: 'TopFooterLinkRepository',
      useClass: PrismaTopFooterLinkRepository,
    },
  ],
})
export class TopFooterLinkModule {}
