import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TopFooterService } from './topFooter.service';
import { CreateTopFooterDTO } from './dtos/CreateTopFooter.dto';
import { UpdateTopFooterDTO } from './dtos/UpdateTopFooter.dto';
import { TopFooter } from '@prisma/client';

@Controller('/top_footers')
export class TopFooterController {
  constructor(private readonly topFooterService: TopFooterService) {}
  @Post()
  async create(@Body() data: CreateTopFooterDTO) {
    return await this.topFooterService.create(data);
  }

  @Get()
  async list(): Promise<TopFooter[]> {
    return await this.topFooterService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTopFooterDTO,
  ): Promise<TopFooter> {
    return await this.topFooterService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.topFooterService.delete(id);
  }
}
