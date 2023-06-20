import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { fileInterceptor } from '../../../config/fileInterceptorConfiguration';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProjectCardImageService } from './projectCardImage.service';
import { ProjectCardImageEntity } from './entities/projectCardImage.entity';
import { ProjectCardImage } from '@prisma/client';

type ParamProps = {
  project_card_id: string;
};

type QueryProps = {
  is_cover: string;
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
    fileInterceptor({
      filename: 'project_card_image',
      destination: './tmp/projectCardImages',
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamProps,
    @Query() queries: QueryProps,
  ): Promise<ProjectCardImage> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { project_card_id } = params;

    const { is_cover } = queries;

    return await this.projectCardImageService.create({
      projectCardId: project_card_id,
      name,
      size,
      key,
      url: '',
      isCover: is_cover === 'true',
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

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:key/:project_card_id')
  async delete(
    @Param('key') key: string,
    @Param('project_card_id') project_card_id: string,
  ): Promise<void> {
    console.log(key, project_card_id);
    return await this.projectCardImageService.delete(key, project_card_id);
  }
}
