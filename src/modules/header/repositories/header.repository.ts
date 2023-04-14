import { Header } from '@prisma/client';
import { CreateHeaderDTO } from '../dtos/CreateHeader.dto';
import { UpdateHeaderDTO } from '../dtos/UpdateHeader.dto';

export interface HeaderRepository {
  create(data: CreateHeaderDTO): Promise<Header>;
  findAll(): Promise<Header[]>;
  update(id: string, data: UpdateHeaderDTO): Promise<Header>;
  delete(id: string): Promise<void>;
  findByLogo(logo: string): Promise<Header>;
  findById(id: string): Promise<Header>;
}
