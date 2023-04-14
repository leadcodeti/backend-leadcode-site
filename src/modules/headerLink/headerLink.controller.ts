import { Body, Controller, Get, Post } from '@nestjs/common';
import { HeaderLinkService } from './headerLink.service';
import { CreateHeaderLinkDTO } from './dtos/CreateHeaderLink.dto';

@Controller('/header_links')
export class HeaderLinkController {
  constructor(private readonly headerLinkService: HeaderLinkService) {}

  @Post()
  async create(@Body() data: CreateHeaderLinkDTO) {
    return await this.headerLinkService.create(data);
  }

  @Get()
  async list() {
    return await this.headerLinkService.list();
  }
}
