import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TopFooterLink } from '@prisma/client';
import { TopFooterLinkService } from './topFooterLink.service';
import { CreateTopFooterLinkDTO } from './dtos/CreateTopFooterLink.dto';
import { UpdateTopFooterLinkDTO } from './dtos/UpdateTopFooterLink.dto';

@Controller('/top_footer_links')
export class TopFooterLinkController {
  constructor(private readonly topFooterLinkService: TopFooterLinkService) {}
  @Post()
  async create(@Body() data: CreateTopFooterLinkDTO) {
    return await this.topFooterLinkService.create(data);
  }

  @Get()
  async list(): Promise<TopFooterLink[]> {
    return await this.topFooterLinkService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTopFooterLinkDTO,
  ): Promise<TopFooterLink> {
    return await this.topFooterLinkService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.topFooterLinkService.delete(id);
  }
}
