import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PrismaHomeRepository } from './repositories/prisma/prismaHome.repository';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
  controllers: [HomeController],
  providers: [
    HomeService,
    PrismaService,
    { provide: 'HomeRepository', useClass: PrismaHomeRepository },
  ],
})
export class HomeModule {}
