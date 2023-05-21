import { FormRegister } from '@prisma/client';

export class FormRegisterEntity implements FormRegister {
  id: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  projectDescription: string;
  areTermsAccepted: boolean;
  createdAt: Date;
  formSectionId: string;
}
