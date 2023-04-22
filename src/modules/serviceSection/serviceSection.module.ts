import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';
import { ServiceSectionController } from './serviceSection.controller';
import { ServiceSectionService } from './serviceSection.service';
import { PrismaServiceSectionRepository } from './repositories/prisma/prismaServiceSection.repository';

@Module({
  controllers: [ServiceSectionController],
  providers: [
    ServiceSectionService,
    PrismaService,
    {
      provide: 'ServiceSectionRepository',
      useClass: PrismaServiceSectionRepository,
    },
  ],
})
export class ServiceSectionModule {}
