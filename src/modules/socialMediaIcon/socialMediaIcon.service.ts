import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { SocialMediaIconRepository } from './repositories/socialMidiaIcon.repository';
import { SocialMediaIcon } from '@prisma/client';
import { CreateSocialMediaIconDTO } from './dtos/CreateSocialMediaIcon.dto';
import { UpdateSocialMediaIconDTO } from './dtos/UpdateSocialMediaIcon.dto';

@Injectable()
export class SocialMediaIconService {
  constructor(
    @Inject('SocialMediaIconRepository')
    private readonly socialMediaIconRepository: SocialMediaIconRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateSocialMediaIconDTO): Promise<SocialMediaIcon> {
    const socialMediaIcon = await this.socialMediaIconRepository.findById(
      data.key,
    );

    if (socialMediaIcon) {
      await this.fileService.deleteFile(`./tmp/heros/${socialMediaIcon.key}`);
      await this.socialMediaIconRepository.delete(data.key);
    }

    data.url = `${process.env.SOCIAL_MEDIA_ICON_URL}/${data.key}`;
    return await this.socialMediaIconRepository.create(data);
  }

  async list() {
    return await this.socialMediaIconRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateSocialMediaIconDTO,
  ): Promise<SocialMediaIcon> {
    const socialMediaIconExists = await this.socialMediaIconRepository.findById(
      data.key,
    );

    if (!socialMediaIconExists) {
      throw new Error('This icon does not exists.');
    }

    return await this.socialMediaIconRepository.update(id, data);
  }

  async delete(key: string): Promise<void> {
    const socialMediaIconExists = await this.socialMediaIconRepository.findById(
      key,
    );

    if (!socialMediaIconExists) {
      throw new Error('This icon does not exist.');
    }
    return await this.socialMediaIconRepository.delete(key);
  }
}
