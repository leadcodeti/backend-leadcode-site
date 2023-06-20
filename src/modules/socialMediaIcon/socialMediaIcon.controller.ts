import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SocialMediaIconEntity } from './entities/socialMediaIcon.entity';
import { SocialMediaIcon } from '@prisma/client';
import { UpdateSocialMediaIconDTO } from './dtos/UpdateSocialMediaIcon.dto';
import { SocialMediaIconService } from './socialMediaIcon.service';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

type ParamProps = {
  social_media_id: string;
};

@ApiTags('Bottom footer')
@Controller('/social_media_icons')
export class SocialMediaIconController {
  constructor(private socialMediaIconService: SocialMediaIconService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: SocialMediaIconEntity,
  })
  @Post('/:social_media_id')
  @UseInterceptors(
    fileInterceptor({
      filename: 'social_media_icon',
      destination: './tmp/socialMediaIcons',
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamProps,
  ): Promise<SocialMediaIcon> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { social_media_id } = params;

    return await this.socialMediaIconService.create({
      socialMediaId: social_media_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: SocialMediaIconEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<SocialMediaIcon[]> {
    return await this.socialMediaIconService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSocialMediaIconDTO,
  ): Promise<SocialMediaIcon> {
    return await this.socialMediaIconService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:key')
  async delete(@Param('key') key: string): Promise<void> {
    return await this.socialMediaIconService.delete(key);
  }
}
