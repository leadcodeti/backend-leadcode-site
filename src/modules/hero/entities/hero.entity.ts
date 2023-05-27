import { Hero } from '@prisma/client';

export class HeroEntity implements Hero {
  homeId: string;
  key: string;
  name: string;
  url: string;
  size: number;
  createdAt: Date;
}
