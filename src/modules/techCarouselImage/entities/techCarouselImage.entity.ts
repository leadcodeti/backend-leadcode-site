import { TechCarouselImage } from '@prisma/client';

export class TechCarouselImageEntity implements TechCarouselImage {
  techCarouselId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  createdAt: Date;
}
