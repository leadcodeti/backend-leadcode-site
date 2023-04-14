import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SiteModule } from './site/site.module';

@Module({
  imports: [UserModule, SiteModule],
})
export class AppModule {}
