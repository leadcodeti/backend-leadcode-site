import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HomeService } from './home.service';
import { Home } from '@prisma/client';
import { UpdateHomeDTO } from './dtos/UpdateHome.dto';
import { CreateHomeDTO } from './dtos/CreateHome.dto';

@Controller('/homes')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @Post()
  async create(@Body() data: CreateHomeDTO): Promise<Home> {
    return await this.homeService.create(data);
  }

  @Get()
  async list(): Promise<Home[]> {
    return await this.homeService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateHomeDTO,
  ): Promise<Home> {
    return await this.homeService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.homeService.delete(id);
  }
}
