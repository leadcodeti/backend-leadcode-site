import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SocialMediaService } from './socialMedia.service';
import { CreateSocialMediaDTO } from './dtos/CreateSocialMedia.dto';
import { SocialMedia } from '@prisma/client';
import { UpdateSocialMediaDTO } from './dtos/UpdateSocialMedia.dto';

@Controller('/social_medias')
export class SocialMediaController {
  constructor(private readonly socialMediaService: SocialMediaService) {}
  @Post()
  async create(@Body() data: CreateSocialMediaDTO) {
    return await this.socialMediaService.create(data);
  }

  @Get()
  async list(): Promise<SocialMedia[]> {
    return await this.socialMediaService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSocialMediaDTO,
  ): Promise<SocialMedia> {
    return await this.socialMediaService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.socialMediaService.delete(id);
  }
}
