import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { SocialMediaIconController } from './socialMediaIcon.controller';
import { SocialMediaIconService } from './socialMediaIcon.service';
import { PrismaSocialMediaIconRepository } from './repositories/prisma/socialMediaIcon.repository';

@Module({
  controllers: [SocialMediaIconController],
  providers: [
    SocialMediaIconService,
    PrismaService,
    FileService,
    {
      provide: 'SocialMediaIconRepository',
      useClass: PrismaSocialMediaIconRepository,
    },
  ],
})
export class SocialMediaIconModule {}
