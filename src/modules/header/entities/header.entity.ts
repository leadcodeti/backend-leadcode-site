import { Header } from '@prisma/client';

export class HeaderEntity implements Header {
  id: string;
  logo: string;
  buttonText: string;
  createdAt: Date;
}
