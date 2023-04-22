import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaTechCarouselRepository } from './repositories/prisma/prismaTechCarousel.repository';
import { TechCarouselController } from './techCarousel.controller';
import { TechCarouselService } from './repositories/techCarousel.service';

@Module({
  controllers: [TechCarouselController],
  providers: [
    TechCarouselService,
    PrismaService,
    {
      provide: 'TechCarouselRepository',
      useClass: PrismaTechCarouselRepository,
    },
  ],
})
export class TechCarouselModule {}
