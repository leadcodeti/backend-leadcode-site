import { ProjectSection } from '@prisma/client';

export class ProjectSectionEntity implements ProjectSection {
  id: string;
  title: string;
  description: string;
  moreButtonText: string;
  createdAt: Date;
}
