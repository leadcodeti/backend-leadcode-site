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
import { ProjectCardImageService } from './projectCardImage.service';
import { ProjectCardImageEntity } from './entities/projectCardImage.entity';
import { ProjectCardImage } from '@prisma/client';
import { UpdateProjectCardImageDTO } from './dtos/UpdateProjectCardImage.dto';

type ParamProps = {
  project_card_id: string;
};

@ApiTags('Seção de projetos')
@Controller('/project_card_images')
export class ProjectCardImageController {
  constructor(private projectCardImageService: ProjectCardImageService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ProjectCardImageEntity,
  })
  @Post('/:project_card_id')
  @UseInterceptors(
    FileInterceptor('project_card_image', {
      storage: diskStorage({
        destination: './tmp/projectCardImages',
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
  ): Promise<ProjectCardImage> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { project_card_id } = params;

    return await this.projectCardImageService.create({
      projectCardId: project_card_id,
      name,
      size,
      key,
      url: '',
      isCover: true,
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ProjectCardImageEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ProjectCardImage[]> {
    return await this.projectCardImageService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateProjectCardImageDTO,
  ): Promise<ProjectCardImage> {
    return await this.projectCardImageService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.projectCardImageService.delete(id);
  }
}
