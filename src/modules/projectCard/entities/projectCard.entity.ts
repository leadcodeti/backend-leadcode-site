import { ProjectCard } from '@prisma/client';

export class ProjectCardEntity implements ProjectCard {
  cover_image: string;
  id: string;
  name: string;
  slug: string;
  summaryDescription: string;
  description: string;
  projectUrl: string;
  behanceUrl: string;
  category: string;
  isSelected: boolean;
  createdAt: Date;
  projectSectionId: string;
}
