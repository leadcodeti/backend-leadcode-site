import { SocialMedia } from '@prisma/client';

export class SocialMediaEntity implements SocialMedia {
  id: string;
  icon: string;
  link: string;
  isSelected: boolean;
  bottomFooterId: string;
  createdAt: Date;
}
