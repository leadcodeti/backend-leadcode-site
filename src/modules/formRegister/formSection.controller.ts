import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FormRegisterService } from './formRegister.service';
import { CreateFormRegisterDTO } from './dtos/CreateFormRegister.dto';
import { UpdateFormRegisterDTO } from './dtos/UpdateFormRegister.dto';
import { FormRegister } from '@prisma/client';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FormRegisterEntity } from './entities/formRegister.entity';

@ApiTags('Seção de formulário')
@Controller('/form_registers')
export class FormRegisterController {
  constructor(private readonly formRegisterService: FormRegisterService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: FormRegisterEntity,
  })
  @Post()
  async create(@Body() data: CreateFormRegisterDTO): Promise<FormRegister> {
    return this.formRegisterService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: FormRegisterEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<FormRegister[]> {
    return this.formRegisterService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: FormRegisterEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFormRegisterDTO,
  ): Promise<FormRegister> {
    return this.formRegisterService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.formRegisterService.delete(id);
  }
}
