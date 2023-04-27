import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SocialMediaController } from './socialMedia.controller';
import { SocialMediaService } from './socialMedia.service';
import { PrismaSocialMediaRepository } from './repositories/prisma/prismaSocialMedia.repository';

@Module({
  controllers: [SocialMediaController],
  providers: [
    SocialMediaService,
    PrismaService,
    {
      provide: 'SocialMediaRepository',
      useClass: PrismaSocialMediaRepository,
    },
  ],
})
export class SocialMediaModule {}
