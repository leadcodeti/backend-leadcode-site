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
import { ServiceCardImageEntity } from './entities/serviceCardImage.entity';
import { ServiceCardImage } from '@prisma/client';
import { UpdateServiceCardImageDTO } from './dtos/UpdateServiceCardImage.dto';
import { ServiceCardImageService } from './serviceCardImage.service';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

type ParamProps = {
  service_card_id: string;
};

@ApiTags('Seção de serviços')
@Controller('/service_card_images')
export class ServiceCardImageController {
  constructor(private serviceCardImageService: ServiceCardImageService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ServiceCardImageEntity,
  })
  @Post('/:service_card_id')
  @UseInterceptors(
    fileInterceptor({
      filename: 'service_card_image',
      destination: './tmp/serviceCardImages',
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamProps,
  ): Promise<ServiceCardImage> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { service_card_id } = params;

    return await this.serviceCardImageService.create({
      serviceCardId: service_card_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ServiceCardImageEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ServiceCardImage[]> {
    return await this.serviceCardImageService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceCardImageDTO,
  ): Promise<ServiceCardImage> {
    return await this.serviceCardImageService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.serviceCardImageService.delete(id);
  }
}
