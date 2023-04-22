import { PrismaService } from 'src/database/prisma.service';
import { PrismaFormRegisterRepository } from './repositories/prisma/prismaFormRegister.repository';
import { FormRegisterController } from './formSection.controller';
import { FormRegisterService } from './formRegister.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [FormRegisterController],
  providers: [
    FormRegisterService,
    PrismaService,
    {
      provide: 'FormRegisterRepository',
      useClass: PrismaFormRegisterRepository,
    },
  ],
})
export class FormRegisternModule {}
