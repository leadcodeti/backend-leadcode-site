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
import { ClientAvatarService } from './clientAvatar.service';
import { ClientAvatarEntity } from './entities/clientAvatar.entity';
import { ClientAvatar } from '@prisma/client';
import { UpdateClientAvatarDTO } from './dtos/UpdateClientAvatar.dto';

type ParamProps = {
  testemonial_id: string;
};

@ApiTags('Testemonial')
@Controller('/client_avatars')
export class ClientAvatarController {
  constructor(private clientAvatarService: ClientAvatarService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: ClientAvatarEntity,
  })
  @Post('/:testemonial_id')
  @UseInterceptors(
    FileInterceptor('client_avatar', {
      storage: diskStorage({
        destination: './tmp/clientAvatars',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.originalname}-${uniqueSuffix}${ext}`;
          const filenameWithNoSpacesToLower = filename
            .replace(/[^a-zA-Z0-9-_.]/g, '-')
            .toLowerCase();
          callback(null, filenameWithNoSpacesToLower);
        },
      }),
    }),
  )
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param() params: ParamProps,
  ): Promise<ClientAvatar> {
    if (!file) {
      throw new Error('You must upload a file.');
    }

    const { originalname: name, size, filename: key } = file;

    const { testemonial_id } = params;

    return await this.clientAvatarService.create({
      testemonialId: testemonial_id,
      name,
      size,
      key,
      url: '',
    });
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    type: ClientAvatarEntity,
    isArray: true,
  })
  @Get()
  async list(): Promise<ClientAvatar[]> {
    return await this.clientAvatarService.list();
  }

  @Put('/:id')
  async update(
    @Param('id') id: string,
    @Body() data: UpdateClientAvatarDTO,
  ): Promise<ClientAvatar> {
    return await this.clientAvatarService.update(id, data);
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.clientAvatarService.delete(id);
  }
}
