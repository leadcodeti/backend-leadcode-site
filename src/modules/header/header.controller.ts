import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HeaderService } from './header.service';
import { CreateHeaderDTO } from './dtos/CreateHeader.dto';
import { UpdateHeaderDTO } from './dtos/UpdateHeader.dto';

@Controller('/headers')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @Post()
  async create(@Body() data: CreateHeaderDTO) {
    return await this.headerService.create(data);
  }

  @Get()
  async list() {
    return await this.headerService.list();
  }

  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateHeaderDTO) {
    return await this.headerService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.headerService.delete(id);
  }
}
