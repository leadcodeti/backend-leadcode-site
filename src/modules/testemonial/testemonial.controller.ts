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

@Controller('/testemonials')
export class TestemonialController {
  constructor(private readonly testemonialService: TestemonialService) {}
  @Post()
  async create(@Body() data: CreateTestemonialDTO) {
    return await this.testemonialService.create(data);
  }

  @Get()
  async list(): Promise<Testemonial[]> {
    return await this.testemonialService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTestemonialDTO,
  ): Promise<Testemonial> {
    return await this.testemonialService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.testemonialService.delete(id);
  }
}
