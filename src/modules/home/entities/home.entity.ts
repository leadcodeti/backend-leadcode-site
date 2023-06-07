import { Home } from '@prisma/client';

export class HomeEntity implements Home {
  id: string;
  heroImage: string;
  headline: string;
  subheadline: string;
  ctaButtonText: string;
  headerId: string;
  createdAt: Date;
}
