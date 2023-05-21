import { ServiceCard } from '@prisma/client';

export class ServiceCardEntity implements ServiceCard {
  id: string;
  image: string;
  title: string;
  content: string;
  isSelected: boolean;
  createdAt: Date;
  serviceSectionId: string;
}
