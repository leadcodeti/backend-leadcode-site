import { Hero } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { HeroRepository } from '../hero.repository';
import { CreateHeroDTO } from '../../dtos/CreateHero.dto';
import { UpdateHeroDTO } from '../../dtos/UpdateHero.dto';

@Injectable()
export class PrismaHeroRepository implements HeroRepository {
  constructor(private prismaService: PrismaService) {}
  async create({ key, name, url, homeId, size }: CreateHeroDTO): Promise<Hero> {
    const createHero = await this.prismaService.hero.create({
      data: {
        homeId,
        key,
        name,
        url,
        size,
        createdAt: new Date(),
      },
    });

    return createHero;
  }

  async findAll(): Promise<Hero[]> {
    return await this.prismaService.hero.findMany();
  }

  async update(id: string, data: UpdateHeroDTO): Promise<Hero> {
    return await this.prismaService.hero.update({
      data: {
        key: data.key,
        name: data.name,
        url: data.url,
        size: data.size,
      },
      where: {
        homeId: id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.hero.delete({
      where: {
        homeId: id,
      },
    });
  }

  async findById(id: string): Promise<Hero> {
    const heroExists = await this.prismaService.hero.findUnique({
      where: {
        homeId: id,
      },
    });

    return heroExists;
  }
}
