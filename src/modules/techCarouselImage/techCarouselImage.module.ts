import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { TechCarouselImageController } from './techCarouselImage.controller';
import { TechCarouselImageService } from './techCarouselImage.service';
import { PrismaTechCarouselImageRepository } from './repositories/prisma/prismaTechCarouselImage.repository';

@Module({
  controllers: [TechCarouselImageController],
  providers: [
    TechCarouselImageService,
    PrismaService,
    FileService,
    {
      provide: 'TechCarouselImageRepository',
      useClass: PrismaTechCarouselImageRepository,
    },
  ],
})
export class TechCarouselImageModule {}
