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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HomeEntity } from './entities/home.entity';

@ApiTags('Home')
@Controller('/homes')
export class HomeController {
  constructor(private homeService: HomeService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: HomeEntity,
  })
  @Post()
  async create(@Body() data: CreateHomeDTO): Promise<Home> {
    return await this.homeService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: HomeEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<Home[]> {
    return await this.homeService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: HomeEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateHomeDTO,
  ): Promise<Home> {
    return await this.homeService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.homeService.delete(id);
  }
}
