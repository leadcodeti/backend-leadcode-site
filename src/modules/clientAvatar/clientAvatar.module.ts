import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { FileService } from 'src/utils/file';
import { ClientAvatarController } from './clientAvatar.controller';
import { ClientAvatarService } from './clientAvatar.service';
import { PrismaClientAvatarRepository } from './repositories/prisma/prismaClientAvatar.repository';

@Module({
  controllers: [ClientAvatarController],
  providers: [
    ClientAvatarService,
    PrismaService,
    FileService,
    {
      provide: 'ClientAvatarRepository',
      useClass: PrismaClientAvatarRepository,
    },
  ],
})
export class ClientAvatarModule {}
