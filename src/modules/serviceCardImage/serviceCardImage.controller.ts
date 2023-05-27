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
import { ServiceCardImageEntity } from './entities/serviceCardImage.entity';
import { ServiceCardImage } from '@prisma/client';
import { UpdateServiceCardImageDTO } from './dtos/UpdateServiceCardImage.dto';
import { ServiceCardImageService } from './serviceCardImage.service';

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
    FileInterceptor('service_card_image', {
      storage: diskStorage({
        destination: './tmp/serviceCardImages',
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
