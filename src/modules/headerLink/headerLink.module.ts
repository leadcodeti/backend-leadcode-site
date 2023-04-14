import { Module } from '@nestjs/common';
import { HeaderLinkController } from './headerLink.controller';
import { HeaderLinkService } from './headerLink.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [HeaderLinkController],
  providers: [HeaderLinkService, PrismaService],
})
export class HeaderLinkModule {}
