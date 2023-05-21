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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HeaderEntity } from './entities/header.entity';

@ApiTags('Home')
@Controller('/headers')
export class HeaderController {
  constructor(private readonly headerService: HeaderService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: HeaderEntity,
  })
  @Post()
  async create(@Body() data: CreateHeaderDTO) {
    return await this.headerService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: HeaderEntity,
    isArray: true,
  })
  @Get()
  async list() {
    return await this.headerService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: HeaderEntity,
  })
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateHeaderDTO) {
    return await this.headerService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.headerService.delete(id);
  }
}
