import { Home } from '@prisma/client';
import { UpdateHomeDTO } from '../dtos/UpdateHome.dto';
import { CreateHomeDTO } from '../dtos/CreateHome.dto';

export interface HomeRepository {
  create(data: CreateHomeDTO): Promise<Home>;
  findAll(): Promise<Home[]>;
  update(id: string, data: UpdateHomeDTO): Promise<Home>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Home>;
  findByHeadline(headline: string): Promise<Home>;
}
