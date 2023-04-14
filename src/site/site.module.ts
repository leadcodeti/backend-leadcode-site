import { Module } from '@nestjs/common';
import { SiteController } from './site.controler.service';

@Module({
  controllers: [SiteController],
  providers: [],
})
export class SiteModule {}
