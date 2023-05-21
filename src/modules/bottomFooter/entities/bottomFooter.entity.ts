import { BottomFooter } from '@prisma/client';

export class BottomFooterEntity implements BottomFooter {
  id: string;
  logo: string;
  privacyPolicy: string;
  yarnLogoText: string;
  createdAt: Date;
}
