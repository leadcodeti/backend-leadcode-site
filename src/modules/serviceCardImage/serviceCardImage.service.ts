import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { ServiceCardImageRepository } from './repositories/serviceCardImage.repository';
import { ServiceCardImage } from '@prisma/client';
import { CreateServiceCardImageDTO } from './dtos/CreateServiceCardImage.dto';
import { UpdateServiceCardImageDTO } from './dtos/UpdateServiceCardImage.dto';

@Injectable()
export class ServiceCardImageService {
  constructor(
    @Inject('ServiceCardImageRepository')
    private readonly serviceCardImageRepository: ServiceCardImageRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateServiceCardImageDTO): Promise<ServiceCardImage> {
    const serviceCardImage = await this.serviceCardImageRepository.findById(
      data.serviceCardId,
    );

    if (serviceCardImage) {
      await this.fileService.deleteFile(
        `./tmp/serviceCardImages/${serviceCardImage.key}`,
      );
      await this.serviceCardImageRepository.delete(data.key);
    }

    data.url = `${process.env.SERVICE_CARD_IMAGE_URL}/${data.key}`;
    return await this.serviceCardImageRepository.create(data);
  }

  async list() {
    return await this.serviceCardImageRepository.findAll();
  }

  async update(
    id: string,
    data: UpdateServiceCardImageDTO,
  ): Promise<ServiceCardImage> {
    const projectCardImageExists =
      await this.serviceCardImageRepository.findById(id);

    if (!projectCardImageExists) {
      throw new Error('This image does not exists.');
    }

    return await this.serviceCardImageRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const projectCardImageExists =
      await this.serviceCardImageRepository.findById(id);

    if (!projectCardImageExists) {
      throw new Error('This image does not exists.');
    }
    return await this.serviceCardImageRepository.delete(id);
  }
}
