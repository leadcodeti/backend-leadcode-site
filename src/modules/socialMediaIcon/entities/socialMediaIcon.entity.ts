import { SocialMediaIcon, TopFooterLogo } from '@prisma/client';

export class SocialMediaIconEntity implements SocialMediaIcon {
  socialMediaId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  createdAt: Date;
}
