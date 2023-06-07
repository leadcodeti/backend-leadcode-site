import { ProjectCardImage } from '@prisma/client';

export class ProjectCardImageEntity implements ProjectCardImage {
  key: string;
  name: string;
  url: string;
  size: number;
  isCover: boolean;
  projectCardId: string;
  createdAt: Date;
}
