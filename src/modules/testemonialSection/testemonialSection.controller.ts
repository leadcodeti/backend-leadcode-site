import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TestemonialSection } from '@prisma/client';
import { TestemonialSectionService } from './testemonialSection.service';
import { CreateTestemonialSectionDTO } from './dtos/CreateTestemonialSection.dto';
import { UpdateTestemonialSectionDTO } from './dtos/UpdateTestemonialSection.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TestemonialSectionEntity } from './entities/testemonialSection.entity';

@ApiTags('Seção dos testemunhos')
@Controller('/testemonial_sections')
export class TestemonialSectionController {
  constructor(
    private readonly testemonialSectionService: TestemonialSectionService,
  ) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TestemonialSectionEntity,
  })
  @Post()
  async create(
    @Body() data: CreateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    return this.testemonialSectionService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TestemonialSectionEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TestemonialSection[]> {
    return this.testemonialSectionService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: TestemonialSectionEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    return this.testemonialSectionService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.testemonialSectionService.delete(id);
  }
}
