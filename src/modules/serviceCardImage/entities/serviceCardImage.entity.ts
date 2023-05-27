import { ServiceCardImage } from '@prisma/client';

export class ServiceCardImageEntity implements ServiceCardImage {
  key: string;
  name: string;
  url: string;
  size: number;
  serviceCardId: string;
  createdAt: Date;
}
