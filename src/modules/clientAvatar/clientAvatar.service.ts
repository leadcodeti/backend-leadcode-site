import { Inject, Injectable } from '@nestjs/common';
import { FileService } from 'src/utils/file';
import { ClientAvatarRepository } from './repositories/clientAvatar.repository';
import { CreateClientAvatarDTO } from './dtos/CreateClientAvatar.dto';
import { ClientAvatar } from '@prisma/client';
import { UpdateClientAvatarDTO } from './dtos/UpdateClientAvatar.dto';

@Injectable()
export class ClientAvatarService {
  constructor(
    @Inject('ClientAvatarRepository')
    private readonly clientAvatarRepository: ClientAvatarRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateClientAvatarDTO): Promise<ClientAvatar> {
    const clientAvatar = await this.clientAvatarRepository.findById(
      data.testemonialId,
    );

    if (clientAvatar) {
      await this.fileService.deleteFile(
        `./tmp/clientAvatars/${clientAvatar.key}`,
      );
      await this.clientAvatarRepository.delete(data.testemonialId);
    }

    data.url = `${process.env.CLIENT_AVATARS}/${data.key}`;
    return await this.clientAvatarRepository.create(data);
  }

  async list() {
    return await this.clientAvatarRepository.findAll();
  }

  async update(id: string, data: UpdateClientAvatarDTO): Promise<ClientAvatar> {
    const clientAvatarExists = await this.clientAvatarRepository.findById(id);

    if (!clientAvatarExists) {
      throw new Error('This avatar does not exists.');
    }

    return await this.clientAvatarRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const clientAvatarExists = await this.clientAvatarRepository.findById(id);

    if (!clientAvatarExists) {
      throw new Error('This avatar does not exists.');
    }
    return await this.clientAvatarRepository.delete(id);
  }
}
