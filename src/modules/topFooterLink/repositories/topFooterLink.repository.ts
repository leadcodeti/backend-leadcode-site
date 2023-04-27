import { TopFooterLink } from '@prisma/client';
import { CreateTopFooterLinkDTO } from '../dtos/CreateTopFooterLink.dto';
import { UpdateTopFooterLinkDTO } from '../dtos/UpdateTopFooterLink.dto';

export interface TopFooterLinkRepository {
  create(data: CreateTopFooterLinkDTO): Promise<TopFooterLink>;
  findAll(): Promise<TopFooterLink[]>;
  update(id: string, data: UpdateTopFooterLinkDTO): Promise<TopFooterLink>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<TopFooterLink>;
  findByLinkName(name: string): Promise<TopFooterLink>;
}
