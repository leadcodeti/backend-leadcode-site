import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { HeroService } from './hero.service';
import { HeroEntity } from './entities/hero.entity';
import { Hero } from '@prisma/client';
import { UpdateHeroDTO } from './dtos/UpdateHero.dto';

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
    FileInterceptor('hero', {
      storage: diskStorage({
        destination: './tmp/heros',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;

          callback(null, filename);
        },
      }),
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

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateHeroDTO,
  ): Promise<Hero> {
    return await this.heroService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.heroService.delete(id);
  }
}
