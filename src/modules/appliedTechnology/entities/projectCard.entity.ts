import { AppliedTechnology } from '@prisma/client';

export class AppliedTechnologyEntity implements AppliedTechnology {
  id: string;
  name: string;
  projectCardId: string;
}
