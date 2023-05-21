import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TopFooterService } from './topFooter.service';
import { CreateTopFooterDTO } from './dtos/CreateTopFooter.dto';
import { UpdateTopFooterDTO } from './dtos/UpdateTopFooter.dto';
import { TopFooter } from '@prisma/client';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TopFooterEntity } from './entities/topFooter.entity';

@ApiTags('Top footer')
@Controller('/top_footers')
export class TopFooterController {
  constructor(private readonly topFooterService: TopFooterService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TopFooterEntity,
  })
  @Post()
  async create(@Body() data: CreateTopFooterDTO) {
    return await this.topFooterService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TopFooterEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TopFooter[]> {
    return await this.topFooterService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: TopFooterEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTopFooterDTO,
  ): Promise<TopFooter> {
    return await this.topFooterService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.topFooterService.delete(id);
  }
}
