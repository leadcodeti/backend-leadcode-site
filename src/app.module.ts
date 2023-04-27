import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SiteModule } from './modules/site/site.module';
import { HeaderModule } from './modules/header/header.module';
import { HeaderLinkModule } from './modules/headerLink/headerLink.module';
import { TechCarouselModule } from './modules/techCarousel/techCarousel.module';
import { HomeModule } from './modules/home/home.module';
import { FormSectionModule } from './modules/formSection/formSection.module';
import { FormRegisternModule } from './modules/formRegister/formRegister.module';
import { ServiceSectionController } from './modules/serviceSection/serviceSection.controller';
import { ServiceSectionModule } from './modules/serviceSection/serviceSection.module';
import { ServiceCardModule } from './modules/serviceCards/serviceCard.module';
import { TestemonialSectionModule } from './modules/testemonialSection/testemonialSection.module';

@Module({
  imports: [
    UserModule,
    SiteModule,
    HeaderModule,
    HeaderLinkModule,
    TechCarouselModule,
    HomeModule,
    FormSectionModule,
    FormRegisternModule,
    ServiceSectionModule,
    ServiceCardModule,
    TestemonialSectionModule,
  ],
})
export class AppModule {}
