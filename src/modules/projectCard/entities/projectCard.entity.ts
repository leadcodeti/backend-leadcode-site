import { ProjectCard } from '@prisma/client';

export class ProjectCardEntity implements ProjectCard {
  id: string;
  name: string;
  slug: string;
  summaryDescription: string;
  description: string;
  productionUrl: string;
  behanceUrl: string;
  isSelected: boolean;
  createdAt: Date;
  projectSectionId: string;
}
