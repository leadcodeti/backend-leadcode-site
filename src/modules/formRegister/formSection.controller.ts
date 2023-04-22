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

@Controller('/form_registers')
export class FormRegisterController {
  constructor(private readonly formRegisterService: FormRegisterService) {}

  @Post()
  async create(@Body() data: CreateFormRegisterDTO): Promise<FormRegister> {
    return this.formRegisterService.create(data);
  }

  @Get()
  async list(): Promise<FormRegister[]> {
    return this.formRegisterService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateFormRegisterDTO,
  ): Promise<FormRegister> {
    return this.formRegisterService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.formRegisterService.delete(id);
  }
}
