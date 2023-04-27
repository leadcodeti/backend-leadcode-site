import { Inject, Injectable } from '@nestjs/common';
import { SocialMedia } from '@prisma/client';
import { UpdateSocialMediaDTO } from './dtos/UpdateSocialMedia.dto';
import { CreateSocialMediaDTO } from './dtos/CreateSocialMedia.dto';
import { SocialMediaRepository } from './repositories/socialMedia.repository';

@Injectable()
export class SocialMediaService {
  constructor(
    @Inject('SocialMediaRepository')
    private readonly socialMediaRepository: SocialMediaRepository,
  ) {}

  async create(data: CreateSocialMediaDTO): Promise<SocialMedia> {
    const socialMediaExists = await this.socialMediaRepository.findByLink(
      data.link,
    );

    if (socialMediaExists) {
      throw new Error('This Social Media already exists.');
    }

    const socialMedia = await this.socialMediaRepository.create(data);

    return socialMedia;
  }

  async list(): Promise<SocialMedia[]> {
    return await this.socialMediaRepository.findAll();
  }

  async update(id: string, data: UpdateSocialMediaDTO): Promise<SocialMedia> {
    const socialMediaExists = await this.socialMediaRepository.findById(
      data.id,
    );

    if (!socialMediaExists) {
      throw new Error('This Social Media does not exists.');
    }

    return await this.socialMediaRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.socialMediaRepository.delete(id);
  }
}
