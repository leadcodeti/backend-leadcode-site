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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ServiceCardEntity } from './entities/serviceCard.entity';

@ApiTags('Seção de serviços')
@Controller('/service_cards')
export class ServiceCardController {
  constructor(private readonly serviceCardService: ServiceCardService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ServiceCardEntity,
  })
  @Post()
  async create(@Body() data: CreateServiceCardDTO): Promise<ServiceCard> {
    return this.serviceCardService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ServiceCardEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ServiceCard[]> {
    return this.serviceCardService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: ServiceCardEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateServiceCardDTO,
  ): Promise<ServiceCard> {
    return this.serviceCardService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.serviceCardService.delete(id);
  }
}
