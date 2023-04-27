import { Injectable } from '@nestjs/common';
import { SocialMediaRepository } from '../socialMedia.repository';
import { PrismaService } from 'src/database/prisma.service';
import { SocialMedia } from '@prisma/client';
import { CreateSocialMediaDTO } from '../../dtos/CreateSocialMedia.dto';
import { UpdateSocialMediaDTO } from '../../dtos/UpdateSocialMedia.dto';

@Injectable()
export class PrismaSocialMediaRepository implements SocialMediaRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    icon,
    link,
    is_selected,
    bottom_footer_id,
  }: CreateSocialMediaDTO): Promise<SocialMedia> {
    const createSocialMedia = await this.prismaService.socialMedia.create({
      data: {
        icon,
        link,
        isSelected: is_selected,
        bottomFooterId: bottom_footer_id,
        createdAt: new Date(),
      },
    });
    return createSocialMedia;
  }

  async findAll(): Promise<SocialMedia[]> {
    return await this.prismaService.socialMedia.findMany();
  }

  async update(id: string, data: UpdateSocialMediaDTO): Promise<SocialMedia> {
    return await this.prismaService.socialMedia.update({
      data: {
        icon: data.icon,
        link: data.link,
        isSelected: data.is_selected,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.socialMedia.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<SocialMedia> {
    const topFooterLinkExists = await this.prismaService.socialMedia.findFirst({
      where: {
        id,
      },
    });

    return topFooterLinkExists;
  }

  async findByLink(link: string): Promise<SocialMedia> {
    const topFooterLinkExists = await this.prismaService.socialMedia.findFirst({
      where: {
        link,
      },
    });

    return topFooterLinkExists;
  }
}
