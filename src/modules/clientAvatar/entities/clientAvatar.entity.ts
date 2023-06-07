import { ClientAvatar } from '@prisma/client';

export class ClientAvatarEntity implements ClientAvatar {
  key: string;
  name: string;
  url: string;
  size: number;
  testemonialId: string;
  createdAt: Date;
}
