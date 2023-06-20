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
import { TopFooterLogoService } from './topFooterLogo.service';
import { TopFooterLogoEntity } from './entities/topFooterLogo.entity';
import { TopFooterLogo } from '@prisma/client';
import { UpdateTopFooterLogoDTO } from './dtos/UpdateTopFooterLogo.dto';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

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
    fileInterceptor({
      filename: 'top_footer_logo',
      destination: './tmp/topFooterLogos',
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
