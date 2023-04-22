import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ServiceCard } from '@prisma/client';
import { ServiceCardService } from './serviceCard.service';
import { CreateServiceCardDTO } from './dtos/CreateServiceCard.dto';
import { UpdateServiceCardDTO } from './dtos/UpdateServiceCard.dto';

@Controller('/service_cards')
export class ServiceCardController {
  constructor(private readonly serviceCardService: ServiceCardService) {}

  @Post()
  async create(@Body() data: CreateServiceCardDTO): Promise<ServiceCard> {
    return this.serviceCardService.create(data);
  }

  @Get()
  async list(): Promise<ServiceCard[]> {
    return this.serviceCardService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceCardDTO,
  ): Promise<ServiceCard> {
    return this.serviceCardService.update(id, data);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.serviceCardService.delete(id);
  }
}
