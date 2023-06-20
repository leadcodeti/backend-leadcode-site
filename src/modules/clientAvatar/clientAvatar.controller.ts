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
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ClientAvatarService } from './clientAvatar.service';
import { ClientAvatarEntity } from './entities/clientAvatar.entity';
import { ClientAvatar } from '@prisma/client';
import { UpdateClientAvatarDTO } from './dtos/UpdateClientAvatar.dto';
import { fileInterceptor } from 'config/fileInterceptorConfiguration';

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
    fileInterceptor({
      filename: 'client_avatar',
      destination: './tmp/clientAvatars',
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
