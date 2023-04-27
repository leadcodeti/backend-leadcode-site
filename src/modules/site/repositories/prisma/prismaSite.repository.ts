import { Injectable } from '@nestjs/common';
import { SiteRepository } from '../site.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateSiteDTO } from '../../dtos/CreateSite.dto';
import { Site } from '@prisma/client';
import { UpdateSiteDTO } from '../../dtos/UpdateSite.dto';

@Injectable()
export class PrismaSiteRepository implements SiteRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    home_id,
    service_section_id,
    project_section_id,
    testemonial_section_id,
    form_section_id,
    top_footer_id,
    bottom_footer_id,
  }: CreateSiteDTO): Promise<Site> {
    const createSite = await this.prismaService.site.create({
      data: {
        homeId: home_id,
        serviceSectionId: service_section_id,
        projectSectionId: project_section_id,
        testemonialSectionId: testemonial_section_id,
        formSectionId: form_section_id,
        topFooterId: top_footer_id,
        bottomFooterId: bottom_footer_id,
        createdAt: new Date(),
      },
    });

    return createSite;
  }

  async findAll(): Promise<Site[]> {
    return await this.prismaService.site.findMany();
  }

  async update(id: string, data: UpdateSiteDTO): Promise<Site> {
    return await this.prismaService.site.update({
      data: {
        homeId: data.home_id,
        serviceSectionId: data.service_section_id,
        projectSectionId: data.project_section_id,
        testemonialSectionId: data.testemonial_section_id,
        formSectionId: data.form_section_id,
        topFooterId: data.top_footer_id,
        bottomFooterId: data.bottom_footer_id,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.site.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<Site> {
    const topFooterLinkExists = await this.prismaService.site.findFirst({
      where: {
        id,
      },
    });

    return topFooterLinkExists;
  }
}
