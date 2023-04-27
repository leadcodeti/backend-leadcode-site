import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { PrismaSiteRepository } from './repositories/prisma/prismaSite.repository';

@Module({
  controllers: [SiteController],
  providers: [
    SiteService,
    PrismaService,
    {
      provide: 'SiteRepository',
      useClass: PrismaSiteRepository,
    },
  ],
})
export class SiteModule {}
