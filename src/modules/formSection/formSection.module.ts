import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaFormSectionRepository } from './repositories/prisma/prismaFormSection.repository';
import { FormSectionController } from './formSection.controller';
import { FormSectionService } from './formSection.service';

@Module({
  controllers: [FormSectionController],
  providers: [
    FormSectionService,
    PrismaService,
    {
      provide: 'FormSectionRepository',
      useClass: PrismaFormSectionRepository,
    },
  ],
})
export class FormSectionModule {}
