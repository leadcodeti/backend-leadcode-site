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
import { TechCarouselImageService } from './techCarouselImage.service';
import { TechCarouselImageEntity } from './entities/techCarouselImage.entity';
import { TechCarouselImage } from '@prisma/client';
import { UpdateTechCarouselImageDTO } from './dtos/UpdateTechCarouselImage.dto';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

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
    fileInterceptor({
      filename: 'tech_carousel_image',
      destination: './tmp/techCarouselImages',
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
