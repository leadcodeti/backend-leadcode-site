import { HeaderLink } from '@prisma/client';

export class HeaderLinkEntity implements HeaderLink {
  id: string;
  name: string;
  link: string;
  isSelected: boolean;
  createdAt: Date;
  headerId: string;
}
