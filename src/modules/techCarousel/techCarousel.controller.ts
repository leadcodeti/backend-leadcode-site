import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTechCarouselDTO } from './dtos/CreateTechCarousel.dto';
import { TechCarousel } from '@prisma/client';
import { UpdateTechCarouselDTO } from './dtos/UpdateTechCarousel.dto';
import { TechCarouselService } from './techCarousel.service';

@Controller('/tech_carousels')
export class TechCarouselController {
  constructor(private readonly techCarouselService: TechCarouselService) {}
  @Post()
  async create(@Body() data: CreateTechCarouselDTO) {
    return await this.techCarouselService.create(data);
  }

  @Get()
  async list(): Promise<TechCarousel[]> {
    return await this.techCarouselService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTechCarouselDTO,
  ): Promise<TechCarousel> {
    return await this.techCarouselService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.techCarouselService.delete(id);
  }
}
