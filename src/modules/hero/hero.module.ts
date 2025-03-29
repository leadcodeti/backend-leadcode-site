import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeroController } from './hero.controller';
import { HeroService } from './hero.service';
import { PrismaHeroRepository } from './repositories/prisma/prismaHero.repository';
import { FileService } from 'src/utils/file';
import { PrismaHomeRepository } from '../home/repositories/prisma/prismaHome.repository';
import { StorageService } from 'src/modules/storage/storage.service';

@Module({
  controllers: [HeroController],
  providers: [
    HeroService,
    PrismaService,
    StorageService,
    FileService,
    { provide: 'HeroRepository', useClass: PrismaHeroRepository },
    { provide: 'HomeRepository', useClass: PrismaHomeRepository },
  ],
})
export class HeroModule {}
