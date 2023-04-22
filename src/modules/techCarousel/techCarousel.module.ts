import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaTechCarouselRepository } from './repositories/prisma/prismaTechCarousel.repository';
import { TechCarouselController } from './techCarousel.controller';

@Module({
  controllers: [TechCarouselController],
  providers: [
    PrismaService,
    {
      provide: 'TechCarouselRepository',
      useClass: PrismaTechCarouselRepository,
    },
  ],
})
export class TechCarouselModule {}
