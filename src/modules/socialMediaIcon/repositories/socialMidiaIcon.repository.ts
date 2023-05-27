import { SocialMediaIcon } from '@prisma/client';
import { CreateSocialMediaIconDTO } from '../dtos/CreateSocialMediaIcon.dto';
import { UpdateSocialMediaIconDTO } from '../dtos/UpdateSocialMediaIcon.dto';

export interface SocialMediaIconRepository {
  create(data: CreateSocialMediaIconDTO): Promise<SocialMediaIcon>;
  findAll(): Promise<SocialMediaIcon[]>;
  update(id: string, data: UpdateSocialMediaIconDTO): Promise<SocialMediaIcon>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<SocialMediaIcon>;
}
