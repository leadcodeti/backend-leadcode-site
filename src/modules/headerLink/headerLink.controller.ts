import { Body, Controller, Post } from '@nestjs/common';
import { HeaderLinkService } from './headerLink.service';
import { CreateHeaderLinkDTO } from './CreateHeaderLink.dto';

@Controller('/header_links')
export class HeaderLinkController {
  constructor(private readonly headerLinkService: HeaderLinkService) {}

  @Post()
  async create(@Body() data: CreateHeaderLinkDTO) {
    return this.headerLinkService.create(data);
  }
}
