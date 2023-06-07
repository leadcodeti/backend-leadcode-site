import { ClientAvatar } from '@prisma/client';
import { CreateClientAvatarDTO } from '../dtos/CreateClientAvatar.dto';
import { UpdateClientAvatarDTO } from '../dtos/UpdateClientAvatar.dto';

export interface ClientAvatarRepository {
  create(data: CreateClientAvatarDTO): Promise<ClientAvatar>;
  findAll(): Promise<ClientAvatar[]>;
  update(key: string, data: UpdateClientAvatarDTO): Promise<ClientAvatar>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<ClientAvatar>;
}
