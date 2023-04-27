import { TopFooter } from '@prisma/client';
import { CreateTopFooterDTO } from '../dtos/CreateTopFooter.dto';
import { UpdateTopFooterDTO } from '../dtos/UpdateTopFooter.dto';

export interface TopFooterRepository {
  create(data: CreateTopFooterDTO): Promise<TopFooter>;
  findAll(): Promise<TopFooter[]>;
  update(id: string, data: UpdateTopFooterDTO): Promise<TopFooter>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<TopFooter>;
  findByLogo(name: string): Promise<TopFooter>;
}
