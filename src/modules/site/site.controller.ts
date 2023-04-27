import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDTO } from './dtos/CreateSite.dto';
import { Site } from '@prisma/client';
import { UpdateSiteDTO } from './dtos/UpdateSite.dto';

@Controller('/sites')
export class SiteController {
  constructor(private readonly sitesService: SiteService) {}
  @Post()
  async create(@Body() data: CreateSiteDTO) {
    return await this.sitesService.create(data);
  }

  @Get()
  async list(): Promise<Site[]> {
    return await this.sitesService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSiteDTO,
  ): Promise<Site> {
    return await this.sitesService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.sitesService.delete(id);
  }
}
