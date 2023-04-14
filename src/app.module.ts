import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SiteModule } from './modules/site/site.module';
import { HeaderModule } from './modules/header/header.module';
import { HeaderLinkModule } from './modules/headerLink/headerLink.module';

@Module({
  imports: [UserModule, SiteModule, HeaderModule, HeaderLinkModule],
})
export class AppModule {}
