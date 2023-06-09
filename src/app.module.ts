import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { SiteModule } from './modules/site/site.module';
import { HeaderModule } from './modules/header/header.module';
import { HeaderLinkModule } from './modules/headerLink/headerLink.module';
import { TechCarouselModule } from './modules/techCarousel/techCarousel.module';
import { HomeModule } from './modules/home/home.module';
import { FormSectionModule } from './modules/formSection/formSection.module';
import { FormRegisterModule } from './modules/formRegister/formRegister.module';
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
import config from '../config/gmailConfiguration';
import { HeroModule } from './modules/hero/hero.module';
import { TopFooterLogoModule } from './modules/topFooterLogo/topFooterLogo.module';
import { SocialMediaIconModule } from './modules/socialMediaIcon/socialMediaIcon.module';
import { ProjectCardImageModule } from './modules/projectCardImage/projectCardImage.module';
import { ServiceCardImageModule } from './modules/serviceCardImage/serviceCardImage.module';
import { TechCarouselImageModule } from './modules/techCarouselImage/techCarouselImage.module';
import { ClientAvatarModule } from './modules/clientAvatar/clientAvatar.module';
import { AppliedTechnologyModule } from './modules/appliedTechnology/appliedTechnology.module';
import { FunctionalityModule } from './modules/functionality/functionality.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.production.env',
      load: [config],
    }),
    UserModule,
    SiteModule,
    HomeModule,
    HeroModule,
    HeaderModule,
    HeaderLinkModule,
    TechCarouselModule,
    TechCarouselImageModule,
    ServiceSectionModule,
    ServiceCardModule,
    ServiceCardImageModule,
    ProjectSectionModule,
    ProjectCardModule,
    ProjectCardImageModule,
    TestemonialSectionModule,
    TestemonialModule,
    FormSectionModule,
    FormRegisterModule,
    TopFooterModule,
    TopFooterLogoModule,
    TopFooterLinkModule,
    BottomFooterModule,
    SocialMediaModule,
    SocialMediaIconModule,
    ClientAvatarModule,
    AppliedTechnologyModule,
    FunctionalityModule,
  ],
})
export class AppModule {}
