import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { HeaderLinkService } from './headerLink.service';
import { CreateHeaderLinkDTO } from './dtos/CreateHeaderLink.dto';
import { UpdateHeaderLinkDTO } from './dtos/UpdateHeaderLink.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HeaderLinkEntity } from './entities/headerLink.entity';

@ApiTags('Home')
@Controller('/header_links')
export class HeaderLinkController {
  constructor(private readonly headerLinkService: HeaderLinkService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: HeaderLinkEntity,
  })
  @Post()
  async create(@Body() data: CreateHeaderLinkDTO) {
    return await this.headerLinkService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: HeaderLinkEntity,
    isArray: true,
  })
  @Get()
  async list() {
    return await this.headerLinkService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: HeaderLinkEntity,
  })
  @Put('/:id')
  async update(@Param('id') id: string, @Body() data: UpdateHeaderLinkDTO) {
    return await this.headerLinkService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string) {
    return await this.headerLinkService.delete(id);
  }
}
