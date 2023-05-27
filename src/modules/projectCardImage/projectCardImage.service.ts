import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { ProjectCardImageRepository } from './repositories/projectCardImage.repository';
import { UpdateProjectCardImageDTO } from './dtos/UpdateProjectCardImage.dto';
import { ProjectCardImage } from '@prisma/client';
import { CreateProjectCardImageDTO } from './dtos/CreateProjectCardImage.dto';

@Injectable()
export class ProjectCardImageService {
  constructor(
    @Inject('ProjectCardImageRepository')
    private readonly projectCardImageRepository: ProjectCardImageRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateProjectCardImageDTO): Promise<ProjectCardImage> {
    const projectCardImage = await this.projectCardImageRepository.findById(
      data.projectCardId,
    );

    if (projectCardImage) {
      await this.fileService.deleteFile(
        `./tmp/projectCardImages/${projectCardImage.key}`,
      );
      await this.projectCardImageRepository.delete(data.key);
    }

    data.url = `${process.env.PROJECT_CARD_IMAGE_URL}/${data.key}`;
    return await this.projectCardImageRepository.create(data);
  }

  async list() {
    return await this.projectCardImageRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateProjectCardImageDTO,
  ): Promise<ProjectCardImage> {
    const projectCardImageExists =
      await this.projectCardImageRepository.findById(id);

    if (!projectCardImageExists) {
      throw new Error('This image does not exists.');
    }

    return await this.projectCardImageRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const projectCardImageExists =
      await this.projectCardImageRepository.findById(id);

    if (!projectCardImageExists) {
      throw new Error('This image does not exists.');
    }
    return await this.projectCardImageRepository.delete(id);
  }
}
