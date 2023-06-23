import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestemonialService } from './testemonial.service';
import { CreateTestemonialDTO } from './dtos/CreateTestemonial.dto';
import { Testemonial } from '@prisma/client';
import { UpdateTestemonialDTO } from './dtos/UpdateTestemonial.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TestemonialEntity } from './entities/testemonial.entity';
import { ListTestemonialsDTO } from './dtos/ListTestemonials.dto';

@ApiTags('Seção dos testemunhos')
@Controller('/testemonials')
export class TestemonialController {
  constructor(private readonly testemonialService: TestemonialService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TestemonialEntity,
  })
  @Post()
  async create(@Body() data: CreateTestemonialDTO) {
    return await this.testemonialService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TestemonialEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ListTestemonialsDTO[]> {
    return await this.testemonialService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: TestemonialEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTestemonialDTO,
  ): Promise<Testemonial> {
    return await this.testemonialService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.testemonialService.delete(id);
  }
}
