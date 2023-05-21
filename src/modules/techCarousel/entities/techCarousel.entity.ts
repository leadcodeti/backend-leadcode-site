import { TechCarousel } from '@prisma/client';

export class TechCarouselEntity implements TechCarousel {
  id: string;
  icon: string;
  name: string;
  isSelected: boolean;
  createdAt: Date;
  homeId: string;
}
