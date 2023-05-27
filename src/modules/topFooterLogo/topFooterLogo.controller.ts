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
import { TopFooterLogoService } from './topFooterLogo.service';
import { TopFooterLogoEntity } from './entities/topFooterLogo.entity';
import { TopFooterLogo } from '@prisma/client';
import { UpdateTopFooterLogoDTO } from './dtos/UpdateTopFooterLogo.dto';

type ParamProps = {
  top_footer_id: string;
};

@ApiTags('Top footer')
@Controller('/top_footer_logos')
export class TopFooterLogoController {
  constructor(private topFooterLogoService: TopFooterLogoService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TopFooterLogoEntity,
  })
  @Post('/:top_footer_id')
  @UseInterceptors(
    FileInterceptor('top_footer_logo', {
      storage: diskStorage({
        destination: './tmp/topFooterLogos',
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
  ): Promise<TopFooterLogo> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { top_footer_id } = params;

    return await this.topFooterLogoService.create({
      topFooterId: top_footer_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TopFooterLogoEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TopFooterLogo[]> {
    return await this.topFooterLogoService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTopFooterLogoDTO,
  ): Promise<TopFooterLogo> {
    return await this.topFooterLogoService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.topFooterLogoService.delete(id);
  }
}
