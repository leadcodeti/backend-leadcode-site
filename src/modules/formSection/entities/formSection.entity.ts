import { FormSection } from '@prisma/client';

export class FormSectionEntity implements FormSection {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}
