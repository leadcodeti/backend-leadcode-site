import { Module } from '@nestjs/common';
import { HeaderLinkController } from './headerLink.controller';
import { HeaderLinkService } from './headerLink.service';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaHeaderLinkRepository } from './repositories/prisma/prismaHeaderLink.repository';

@Module({
  controllers: [HeaderLinkController],
  providers: [
    HeaderLinkService,
    PrismaService,
    {
      provide: 'HeaderLinkRepository',
      useClass: PrismaHeaderLinkRepository,
    },
  ],
})
export class HeaderLinkModule {}
