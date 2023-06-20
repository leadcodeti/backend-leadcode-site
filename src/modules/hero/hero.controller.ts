import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HeroService } from './hero.service';
import { HeroEntity } from './entities/hero.entity';
import { Hero } from '@prisma/client';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

type ParamProps = {
  home_id: string;
};

@ApiTags('Home')
@Controller('/heros')
export class HeroController {
  constructor(private heroService: HeroService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: HeroEntity,
  })
  @Post('/:home_id')
  @UseInterceptors(
    fileInterceptor({
      filename: 'hero',
      destination: './tmp/heros',
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamProps,
  ): Promise<Hero> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { home_id } = params;

    return await this.heroService.create({
      homeId: home_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: HeroEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<Hero[]> {
    return await this.heroService.list();
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:key/:home_id')
  async delete(
    @Param('key') key: string,
    @Param('home_id') home_id: string,
  ): Promise<void> {
    return await this.heroService.delete(key, home_id);
  }
}
