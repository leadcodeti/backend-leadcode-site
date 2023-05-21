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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SocialMediaEntity } from './entities/socialMedia.entity';

@ApiTags('Bottom footer')
@Controller('/social_medias')
export class SocialMediaController {
  constructor(private readonly socialMediaService: SocialMediaService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: SocialMediaEntity,
  })
  @Post()
  async create(@Body() data: CreateSocialMediaDTO) {
    return await this.socialMediaService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: SocialMediaEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<SocialMedia[]> {
    return await this.socialMediaService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: SocialMediaEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSocialMediaDTO,
  ): Promise<SocialMedia> {
    return await this.socialMediaService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.socialMediaService.delete(id);
  }
}
