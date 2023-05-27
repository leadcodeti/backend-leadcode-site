import { TopFooterLogo } from '@prisma/client';

export class TopFooterLogoEntity implements TopFooterLogo {
  topFooterId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  createdAt: Date;
}
