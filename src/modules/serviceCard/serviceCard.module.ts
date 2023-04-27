import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';
import { ServiceCardController } from './serviceCard.controller';
import { ServiceCardService } from './serviceCard.service';
import { PrismaServiceCardRepository } from './repositories/prisma/prismaServiceCard.repository';

@Module({
  controllers: [ServiceCardController],
  providers: [
    ServiceCardService,
    PrismaService,
    {
      provide: 'ServiceCardRepository',
      useClass: PrismaServiceCardRepository,
    },
  ],
})
export class ServiceCardModule {}
