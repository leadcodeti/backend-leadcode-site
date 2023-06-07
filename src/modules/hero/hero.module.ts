import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { PrismaHeroRepository } from './repositories/prisma/prismaHero.repository';
import { FileService } from 'src/utils/file';
import { PrismaHomeRepository } from '../home/repositories/prisma/prismaHome.repository';

@Module({
  controllers: [HeroController],
  providers: [
    HeroService,
    PrismaService,
    FileService,
    { provide: 'HeroRepository', useClass: PrismaHeroRepository },
    { provide: 'HomeRepository', useClass: PrismaHomeRepository },
  ],
})
export class HeroModule {}
