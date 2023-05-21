import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TopFooterLink } from '@prisma/client';
import { TopFooterLinkService } from './topFooterLink.service';
import { CreateTopFooterLinkDTO } from './dtos/CreateTopFooterLink.dto';
import { UpdateTopFooterLinkDTO } from './dtos/UpdateTopFooterLink.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TopFooterLinkEntity } from './entities/topFooterLink.entity';

@ApiTags('Top footer')
@Controller('/top_footer_links')
export class TopFooterLinkController {
  constructor(private readonly topFooterLinkService: TopFooterLinkService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: TopFooterLinkEntity,
  })
  @Post()
  async create(@Body() data: CreateTopFooterLinkDTO) {
    return await this.topFooterLinkService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: TopFooterLinkEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<TopFooterLink[]> {
    return await this.topFooterLinkService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: TopFooterLinkEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateTopFooterLinkDTO,
  ): Promise<TopFooterLink> {
    return await this.topFooterLinkService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.topFooterLinkService.delete(id);
  }
}
