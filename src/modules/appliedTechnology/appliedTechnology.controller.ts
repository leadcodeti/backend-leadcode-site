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
import { AppliedTechnologyService } from './appliedTechnology.service';
import { AppliedTechnologyEntity } from './entities/projectCard.entity';
import { CreateAppliedTechnologyDTO } from './dtos/CreateAppliedTechnology.dto';
import { AppliedTechnology } from '@prisma/client';
import { UpdateAppliedTechnologyDTO } from './dtos/UpdateAppliedTechnology.dto';

@ApiTags('Seção de projetos')
@Controller('/applied_technologies')
export class AppliedTechnologyController {
  constructor(
    private readonly appliedTechnologyService: AppliedTechnologyService,
  ) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: AppliedTechnologyEntity,
  })
  @Post()
  async create(
    @Body() data: CreateAppliedTechnologyDTO,
  ): Promise<AppliedTechnology> {
    return this.appliedTechnologyService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: AppliedTechnologyEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<AppliedTechnology[]> {
    return this.appliedTechnologyService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: AppliedTechnologyEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateAppliedTechnologyDTO,
  ): Promise<AppliedTechnology> {
    return this.appliedTechnologyService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.appliedTechnologyService.delete(id);
  }
}
