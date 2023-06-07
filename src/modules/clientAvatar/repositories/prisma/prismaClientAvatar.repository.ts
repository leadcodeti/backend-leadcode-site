import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ClientAvatarRepository } from '../clientAvatar.repository';
import { ClientAvatar } from '@prisma/client';
import { UpdateClientAvatarDTO } from '../../dtos/UpdateClientAvatar.dto';
import { CreateClientAvatarDTO } from '../../dtos/CreateClientAvatar.dto';

@Injectable()
export class PrismaClientAvatarRepository implements ClientAvatarRepository {
  constructor(private prismaService: PrismaService) {}
  async create({
    testemonialId,
    key,
    name,
    url,
    size,
  }: CreateClientAvatarDTO): Promise<ClientAvatar> {
    const clientAvatar = await this.prismaService.clientAvatar.create({
      data: {
        testemonialId,
        key,
        name,
        url,
        size,
        createdAt: new Date(),
      },
    });

    return clientAvatar;
  }

  async findAll(): Promise<ClientAvatar[]> {
    return await this.prismaService.clientAvatar.findMany();
  }

  async update(
    key: string,
    data: UpdateClientAvatarDTO,
  ): Promise<ClientAvatar> {
    return await this.prismaService.clientAvatar.update({
      data: {
        key: data.key,
        name: data.name,
        url: data.url,
        size: data.size,
      },
      where: {
        key,
      },
    });
  }

  async delete(key: string): Promise<void> {
    await this.prismaService.clientAvatar.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<ClientAvatar> {
    const clientAvatarExists = await this.prismaService.clientAvatar.findUnique(
      {
        where: {
          key,
        },
      },
    );

    return clientAvatarExists;
  }
}
