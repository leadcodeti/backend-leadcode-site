import { Module } from '@nestjs/common';
import { HeaderController } from './header.controller';
import { HeaderService } from './header.service';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaHeaderRepository } from './repositories/prisma/prismaHeader.repository';

@Module({
  controllers: [HeaderController],
  providers: [
    HeaderService,
    PrismaService,
    {
      provide: 'HeaderRepository',
      useClass: PrismaHeaderRepository,
    },
  ],
})
export class HeaderModule {}
