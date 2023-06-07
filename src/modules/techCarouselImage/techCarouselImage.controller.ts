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
import { TechCarouselImageService } from './techCarouselImage.service';
import { TechCarouselImageEntity } from './entities/techCarouselImage.entity';
import { TechCarouselImage } from '@prisma/client';
import { UpdateTechCarouselImageDTO } from './dtos/UpdateTechCarouselImage.dto';

type ParamProps = {
  tech_carousel_id: string;
};

@ApiTags('Home')
@Controller('/tech_carousel_images')
export class TechCarouselImageController {
  constructor(private techCarouselImageService: TechCarouselImageService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TechCarouselImageEntity,
  })
  @Post('/:tech_carousel_id')
  @UseInterceptors(
    FileInterceptor('tech_carousel_image', {
      storage: diskStorage({
        destination: './tmp/techCarouselImages',
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
  ): Promise<TechCarouselImage> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { tech_carousel_id } = params;

    return await this.techCarouselImageService.create({
      techCarouselId: tech_carousel_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TechCarouselImageEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TechCarouselImage[]> {
    return await this.techCarouselImageService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTechCarouselImageDTO,
  ): Promise<TechCarouselImage> {
    return await this.techCarouselImageService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.techCarouselImageService.delete(id);
  }
}
