import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { SiteModule } from './modules/site/site.module';
import { HeaderModule } from './modules/header/header.module';
import { HeaderLinkModule } from './modules/headerLink/headerLink.module';
import { TechCarouselModule } from './modules/techCarousel/techCarousel.module';
import { HomeModule } from './modules/home/home.module';
import { FormSectionModule } from './modules/formSection/formSection.module';
import { FormRegisternModule } from './modules/formRegister/formRegister.module';
import { ServiceSectionModule } from './modules/serviceSection/serviceSection.module';
import { ServiceCardModule } from './modules/serviceCard/serviceCard.module';
import { TestemonialSectionModule } from './modules/testemonialSection/testemonialSection.module';
import { TestemonialModule } from './modules/testemonial/testemonial.module';
import { ProjectSectionModule } from './modules/projectSection/projectSection.module';
import { ProjectCardModule } from './modules/projectCard/projectCard.module';

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
    TestemonialModule,
    ProjectSectionModule,
    ProjectCardModule,
  ],
})
export class AppModule {}
