import { HeaderLink } from '@prisma/client';
import { CreateHeaderLinkDTO } from '../dtos/CreateHeaderLink.dto';
import { UpdateHeaderLinkDTO } from '../dtos/UpdateHeaderLink.dto';

export interface HeaderLinkRepository {
  create(data: CreateHeaderLinkDTO): Promise<HeaderLink>;
  findAll(): Promise<HeaderLink[]>;
  update(id: string, data: UpdateHeaderLinkDTO): Promise<HeaderLink>;
  delete(id: string): Promise<void>;
  findByName(logo: string): Promise<HeaderLink>;
  findById(id: string): Promise<HeaderLink>;
}
