import { Functionality } from '@prisma/client';

export class FuncionalityEntity implements Functionality {
  id: string;
  name: string;
  projectCardId: string;
  createdAt: Date;
}
