import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateBottomFooterDTO } from './dtos/CreateBottomFooter.dto';
import { BottomFooter } from '@prisma/client';
import { UpdateBottomFooterDTO } from './dtos/UpdateBottomFooter.dto';
import { BottomFooterService } from './bottomFooter.service';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { BottomFooterEntity } from './entities/bottomFooter.entity';

@ApiTags('Bottom footer')
@Controller('/bottom_footers')
export class BottomFooterController {
  constructor(private readonly bottomFooterService: BottomFooterService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: BottomFooterEntity,
  })
  @Post()
  async create(@Body() data: CreateBottomFooterDTO) {
    return await this.bottomFooterService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: BottomFooterEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<BottomFooter[]> {
    return await this.bottomFooterService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: BottomFooterEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateBottomFooterDTO,
  ): Promise<BottomFooter> {
    return await this.bottomFooterService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.bottomFooterService.delete(id);
  }
}
