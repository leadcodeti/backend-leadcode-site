import { Testemonial } from '@prisma/client';

export class TestemonialEntity implements Testemonial {
  id: string;
  content: string;
  clientAvatar: string;
  clientName: string;
  jobPosition: string;
  isSelected: boolean;
  createdAt: Date;
  testemonialSectionId: string;
}
