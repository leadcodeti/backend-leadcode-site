import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HeaderLinkService } from './headerLink.service';
import { CreateHeaderLinkDTO } from './dtos/CreateHeaderLink.dto';
import { UpdateHeaderLinkDTO } from './dtos/UpdateHeaderLink.dto';

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

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateHeaderLinkDTO) {
    return await this.headerLinkService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.headerLinkService.delete(id);
  }
}
