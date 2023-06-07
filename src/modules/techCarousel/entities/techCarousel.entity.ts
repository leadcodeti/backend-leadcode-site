import { TechCarousel } from '@prisma/client';

export class TechCarouselEntity implements TechCarousel {
  id: string;
  image: string;
  name: string;
  isSelected: boolean;
  createdAt: Date;
  homeId: string;
}
