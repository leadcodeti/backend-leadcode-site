import { Site } from '@prisma/client';

export class SiteEntity implements Site {
  id: string;
  createdAt: Date;
  homeId: string;
  serviceSectionId: string;
  projectSectionId: string;
  testemonialSectionId: string;
  formSectionId: string;
  topFooterId: string;
  bottomFooterId: string;
}
