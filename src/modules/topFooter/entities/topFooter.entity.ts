import { TopFooter } from '@prisma/client';

export class TopFooterEntity implements TopFooter {
  id: string;
  logo: string;
  phone: string;
  email: string;
  createdAt: Date;
}
