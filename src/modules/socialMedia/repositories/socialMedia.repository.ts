import { SocialMedia } from '@prisma/client';
import { CreateSocialMediaDTO } from '../dtos/CreateSocialMedia.dto';
import { UpdateSocialMediaDTO } from '../dtos/UpdateSocialMedia.dto';

export interface SocialMediaRepository {
  create(data: CreateSocialMediaDTO): Promise<SocialMedia>;
  findAll(): Promise<SocialMedia[]>;
  update(id: string, data: UpdateSocialMediaDTO): Promise<SocialMedia>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<SocialMedia>;
  findByLink(link: string): Promise<SocialMedia>;
}
