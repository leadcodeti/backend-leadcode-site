import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FunctionalityService } from './functionality.service';
import { FuncionalityEntity } from './entities/funcionality.entity';
import { CreateFunctionalityDTO } from './dtos/CreateFunctionality.dto';
import { Functionality } from '@prisma/client';
import { UpdateFunctionalityDTO } from './dtos/UpdateFunctionality.dto';

@ApiTags('Seção de projetos')
@Controller('/functionalities')
export class FunctionalityController {
  constructor(private readonly functionalityService: FunctionalityService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: FuncionalityEntity,
  })
  @Post()
  async create(@Body() data: CreateFunctionalityDTO): Promise<Functionality> {
    return this.functionalityService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: FuncionalityEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<Functionality[]> {
    return this.functionalityService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: FuncionalityEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFunctionalityDTO,
  ): Promise<Functionality> {
    return this.functionalityService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.functionalityService.delete(id);
  }
}
