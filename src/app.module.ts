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
import { TopFooterModule } from './modules/topFooter/topFooter.module';
import { TopFooterLinkModule } from './modules/topFooterLink/topFooterLink.module';
import { BottomFooterModule } from './modules/bottomFooter/bottomFooter.module';
import { SocialMediaModule } from './modules/socialMedia/socialMedia.module';

@Module({
  imports: [
    UserModule,
    SiteModule,
    HomeModule,
    HeaderModule,
    HeaderLinkModule,
    TechCarouselModule,
    ServiceSectionModule,
    ServiceCardModule,
    ProjectSectionModule,
    ProjectCardModule,
    TestemonialSectionModule,
    TestemonialModule,
    FormSectionModule,
    FormRegisternModule,
    TopFooterModule,
    TopFooterLinkModule,
    BottomFooterModule,
    SocialMediaModule,
  ],
})
export class AppModule {}
