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

@Controller('/testemonial_sections')
export class TestemonialSectionController {
  constructor(
    private readonly testemonialSectionService: TestemonialSectionService,
  ) {}

  @Post()
  async create(
    @Body() data: CreateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    return this.testemonialSectionService.create(data);
  }

  @Get()
  async list(): Promise<TestemonialSection[]> {
    return this.testemonialSectionService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTestemonialSectionDTO,
  ): Promise<TestemonialSection> {
    return this.testemonialSectionService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.testemonialSectionService.delete(id);
  }
}
