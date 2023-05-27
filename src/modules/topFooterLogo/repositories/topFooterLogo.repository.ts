import { TopFooterLogo } from '@prisma/client';
import { CreateTopFooterLogoDTO } from '../dtos/CreateTopFooterLogo.dto';
import { UpdateTopFooterLogoDTO } from '../dtos/UpdateTopFooterLogo.dto';

export interface TopFooterLogoRepository {
  create(data: CreateTopFooterLogoDTO): Promise<TopFooterLogo>;
  findAll(): Promise<TopFooterLogo[]>;
  update(key: string, data: UpdateTopFooterLogoDTO): Promise<TopFooterLogo>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<TopFooterLogo>;
}
