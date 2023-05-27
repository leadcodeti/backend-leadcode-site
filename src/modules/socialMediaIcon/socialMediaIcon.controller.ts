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
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SocialMediaIconEntity } from './entities/socialMediaIcon.entity';
import { SocialMediaIcon } from '@prisma/client';
import { UpdateSocialMediaIconDTO } from './dtos/UpdateSocialMediaIcon.dto';
import { SocialMediaIconService } from './socialMediaIcon.service';

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
    FileInterceptor('social_media_icon', {
      storage: diskStorage({
        destination: './tmp/socialMediaIcons',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
          const filenameWithNoSpacesToLower = filename
            .replace(/[^a-zA-Z0-9-_.]/g, '-')
            .toLowerCase();
          callback(null, filenameWithNoSpacesToLower);
        },
      }),
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
