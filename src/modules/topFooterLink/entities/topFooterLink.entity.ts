import { TopFooterLink } from '@prisma/client';

export class TopFooterLinkEntity implements TopFooterLink {
  id: string;
  icon: string;
  name: string;
  isSelected: boolean;
  createdAt: Date;
  topFooterId: string;
}
