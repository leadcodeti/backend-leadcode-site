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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TechCarouselEntity } from './entities/techCarousel.entity';

@ApiTags('Home')
@Controller('/tech_carousels')
export class TechCarouselController {
  constructor(private readonly techCarouselService: TechCarouselService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TechCarouselEntity,
  })
  @Post()
  async create(@Body() data: CreateTechCarouselDTO) {
    return await this.techCarouselService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TechCarouselEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TechCarousel[]> {
    return await this.techCarouselService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: TechCarouselEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTechCarouselDTO,
  ): Promise<TechCarousel> {
    return await this.techCarouselService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.techCarouselService.delete(id);
  }
}
