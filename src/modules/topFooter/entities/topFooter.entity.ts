import { TopFooter } from '@prisma/client';

export class TopFooterEntity implements TopFooter {
  id: string;
  logo: string;
  createdAt: Date;
}
