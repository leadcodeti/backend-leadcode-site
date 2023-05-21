import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SiteService } from './site.service';
import { CreateSiteDTO } from './dtos/CreateSite.dto';
import { Site } from '@prisma/client';
import { UpdateSiteDTO } from './dtos/UpdateSite.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SiteEntity } from './entities/site.entity';

@ApiTags('Site')
@Controller('/sites')
export class SiteController {
  constructor(private readonly sitesService: SiteService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: SiteEntity,
  })
  @Post()
  async create(@Body() data: CreateSiteDTO) {
    return await this.sitesService.create(data);
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: SiteEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<Site[]> {
    return await this.sitesService.list();
  }

  @ApiOkResponse({
    description: 'Atualização realizada com sucesso.',
    type: SiteEntity,
  })
  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateSiteDTO,
  ): Promise<Site> {
    return await this.sitesService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.sitesService.delete(id);
  }
}
