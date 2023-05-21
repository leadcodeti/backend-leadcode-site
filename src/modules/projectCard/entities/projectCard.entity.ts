import { ProjectCard } from '@prisma/client';

export class ProjectCardEntity implements ProjectCard {
  id: string;
  image: string;
  name: string;
  description: string;
  isSelected: boolean;
  createdAt: Date;
  projectSectionId: string;
}
