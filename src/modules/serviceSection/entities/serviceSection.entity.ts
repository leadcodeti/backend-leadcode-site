import { ServiceSection } from '@prisma/client';

export class ServiceSectionEntity implements ServiceSection {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
