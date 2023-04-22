import { Body, Controller, Post } from '@nestjs/common';
import { CreateTechCarouselDTO } from './dtos/CreateTechCarousel.dto';
import { TechCarouselService } from './repositories/techCarousel.service';

@Controller('/tech_carousels')
export class TechCarouselController {
  constructor(private readonly techCarouselService: TechCarouselService) {}
  @Post()
  async create(@Body() data: CreateTechCarouselDTO) {
    return await this.techCarouselService.create(data);
  }
}
