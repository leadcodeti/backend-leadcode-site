import { ProjectCard } from '@prisma/client';

export class ProjectCardEntity implements ProjectCard {
  image: string;
  id: string;
  name: string;
  slug: string;
  summaryDescription: string;
  description: string;
  productionUrl: string;
  behanceUrl: string;
  category: string;
  isSelected: boolean;
  createdAt: Date;
  projectSectionId: string;
}
