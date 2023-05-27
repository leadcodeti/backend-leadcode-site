import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { SocialMediaIconRepository } from '../socialMidiaIcon.repository';
import { CreateSocialMediaIconDTO } from '../../dtos/CreateSocialMediaIcon.dto';
import { SocialMediaIcon } from '@prisma/client';
import { UpdateSocialMediaIconDTO } from '../../dtos/UpdateSocialMediaIcon.dto';

@Injectable()
export class PrismaSocialMediaIconRepository
  implements SocialMediaIconRepository
{
  constructor(private prismaService: PrismaService) {}
  async create({
    key,
    name,
    url,
    socialMediaId,
    size,
  }: CreateSocialMediaIconDTO): Promise<SocialMediaIcon> {
    const createSocialMediaIcon =
      await this.prismaService.socialMediaIcon.create({
        data: {
          socialMediaId,
          key,
          name,
          url,
          size,
          createdAt: new Date(),
        },
      });

    return createSocialMediaIcon;
  }

  async findAll(): Promise<SocialMediaIcon[]> {
    return await this.prismaService.socialMediaIcon.findMany();
  }

  async update(
    key: string,
    data: UpdateSocialMediaIconDTO,
  ): Promise<SocialMediaIcon> {
    return await this.prismaService.socialMediaIcon.update({
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
    await this.prismaService.socialMediaIcon.delete({
      where: {
        key,
      },
    });
  }

  async findById(key: string): Promise<SocialMediaIcon> {
    const socialMediaIconExists =
      await this.prismaService.socialMediaIcon.findUnique({
        where: {
          key,
        },
      });

    return socialMediaIconExists;
  }
}
