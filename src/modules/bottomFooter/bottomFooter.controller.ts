import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBottomFooterDTO } from './dtos/CreateBottomFooter.dto';
import { BottomFooter } from '@prisma/client';
import { UpdateBottomFooterDTO } from './dtos/UpdateBottomFooter.dto';
import { BottomFooterService } from './bottomFooter.service';

@Controller('/bottom_footers')
export class BottomFooterController {
  constructor(private readonly bottomFooterService: BottomFooterService) {}
  @Post()
  async create(@Body() data: CreateBottomFooterDTO) {
    return await this.bottomFooterService.create(data);
  }

  @Get()
  async list(): Promise<BottomFooter[]> {
    return await this.bottomFooterService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBottomFooterDTO,
  ): Promise<BottomFooter> {
    return await this.bottomFooterService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.bottomFooterService.delete(id);
  }
}
