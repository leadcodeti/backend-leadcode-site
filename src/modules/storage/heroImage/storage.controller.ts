import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StorageService } from 'src/modules/storage/storage.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common';

@ApiTags('Storage')
@Controller('/storage/heroimages')
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @ApiCreatedResponse({
    description: 'Cadastro realizado com sucesso.',
    type: String,
  })
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async create(@UploadedFile() file: Express.Multer.File) {
    return await this.storageService.uploadFile(file, 'heros');
  }

  @ApiOkResponse({
    description: 'Listagem realizada com sucesso.',
    isArray: true,
  })
  @Get()
  async list() {
    return await this.storageService.listFiles('heros');
  }

  @ApiOkResponse({
    description: 'Arquivo recuperado com sucesso.',
  })
  @Get('/:fileKey')
  async getFile(@Param('fileKey') fileKey: string) {
    return await this.storageService.getFile(fileKey, 'heros');
  }

  @ApiNoContentResponse({
    description: 'Deleção realizada com sucesso.',
  })
  @Delete('/:fileKey')
  async delete(@Param('fileKey') fileKey: string) {
    return await this.storageService.deleteFile(fileKey, 'heros');
  }
}
