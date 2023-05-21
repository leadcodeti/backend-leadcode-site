import { TestemonialSection } from '@prisma/client';

export class TestemonialSectionEntity implements TestemonialSection {
  id: string;
  title: string;
  createdAt: Date;
}
