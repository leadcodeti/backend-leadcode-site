import { BottomFooter } from '@prisma/client';
import { CreateBottomFooterDTO } from '../dtos/CreateBottomFooter.dto';
import { UpdateBottomFooterDTO } from '../dtos/UpdateBottomFooter.dto';

export interface BottomFooterRepository {
  create(data: CreateBottomFooterDTO): Promise<BottomFooter>;
  findAll(): Promise<BottomFooter[]>;
  update(id: string, data: UpdateBottomFooterDTO): Promise<BottomFooter>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<BottomFooter>;
  findByLogo(logo: string): Promise<BottomFooter>;
}
