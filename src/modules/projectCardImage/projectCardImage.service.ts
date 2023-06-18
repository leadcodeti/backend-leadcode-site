import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { ProjectCardImageRepository } from './repositories/projectCardImage.repository';
import { ProjectCardImage } from '@prisma/client';
import { CreateProjectCardImageDTO } from './dtos/CreateProjectCardImage.dto';
import { ProjectCardRepository } from '../projectCard/repositories/projectCard.repository';
import { SharpService } from 'config/sharpConfiguration';

@Injectable()
export class ProjectCardImageService {
  constructor(
    @Inject('ProjectCardImageRepository')
    private readonly projectCardImageRepository: ProjectCardImageRepository,
    @Inject('ProjectCardRepository')
    private readonly projectCardRepository: ProjectCardRepository,
    private readonly fileService: FileService,
    private readonly sharpService: SharpService,
  ) {}

  async create(data: CreateProjectCardImageDTO): Promise<ProjectCardImage> {
    data.name = data.name.replace(/(.png)|(.jpeg)|(.jpg)|(.gif)|(.webp)/, '');
    const multerNewImagePath = `./tmp/projectCardImages/${data.key}`;
    this.sharpService.sharpConfig(multerNewImagePath, data.isCover);

    const projectCard = await this.projectCardRepository.findById(
      data.projectCardId,
    );

    if (!projectCard) {
      throw new Error('This card does not exist.');
    }

    const projectCardImage = await this.projectCardImageRepository.findByKey(
      data.projectCardId,
    );

    if (projectCardImage) {
      await this.fileService.deleteFile(
        `./tmp/projectCardImages/${projectCardImage.key}`,
      );
      await this.projectCardImageRepository.delete(data.key);
    }

    data.key = data.key.replace(
      /(.png)|(.jpeg)|(.jpg)|(.gif)|(.webp)/,
      '-compressed.webp',
    );
    data.url = `${process.env.PROJECT_CARD_IMAGE_URL}/${data.key}`;

    if (data.isCover) {
      const cardToUpdateImage = {
        id: data.projectCardId,
        image: projectCard.cover_image,
        name: projectCard.name,
        slug: projectCard.slug,
        summary_description: projectCard.summaryDescription,
        description: projectCard.description,
        project_url: projectCard.projectUrl,
        behance_url: projectCard.behanceUrl,
        category: projectCard.category,
        is_selected: projectCard.isSelected,
      };

      await this.projectCardRepository.update(
        data.projectCardId,
        cardToUpdateImage,
      );
    }

    return await this.projectCardImageRepository.create(data);
  }

  async list() {
    return await this.projectCardImageRepository.findAll();
  }

  async delete(key: string, project_card_id: string): Promise<void> {
    const projectCardImageExists =
      await this.projectCardImageRepository.findByKey(key);
    const projectCard = await this.projectCardRepository.findById(
      project_card_id,
    );

    if (!projectCard) {
      throw new Error('This card does not exist.');
    }

    if (!projectCardImageExists) {
      throw new Error('This image does not exist.');
    }

    await this.fileService.deleteFile(`./tmp/projectCardImages/${key}`);

    if (projectCardImageExists.isCover) {
      const cardToUpdateImage = {
        id: projectCard.id,
        image: null,
        name: projectCard.name,
        slug: projectCard.slug,
        summary_description: projectCard.summaryDescription,
        description: projectCard.description,
        project_url: projectCard.projectUrl,
        behance_url: projectCard.behanceUrl,
        category: projectCard.category,
        is_selected: projectCard.isSelected,
      };

      await this.projectCardRepository.update(
        project_card_id,
        cardToUpdateImage,
      );
    }

    return await this.projectCardImageRepository.delete(key);
  }
}
