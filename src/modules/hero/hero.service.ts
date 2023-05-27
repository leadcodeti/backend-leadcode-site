import { Inject, Injectable } from '@nestjs/common';
import { CreateHeroDTO } from './dtos/CreateHero.dto';
import { HeroRepository } from './repositories/hero.repository';
import { Hero } from '@prisma/client';
import { UpdateHeroDTO } from './dtos/UpdateHero.dto';

@Injectable()
export class HeroService {
  constructor(
    @Inject('HeroRepository')
    private readonly heroRepository: HeroRepository,
  ) {}

  async create(data: CreateHeroDTO): Promise<Hero> {
    data.name = data.name.replace('}', '');
    data.url = `${process.env.HERO_URL}/${data.key}`;
    return await this.heroRepository.create(data);
  }

  async list() {
    return await this.heroRepository.findAll();
  }

  async update(id: string, data: UpdateHeroDTO): Promise<Hero> {
    const heroExists = await this.heroRepository.findById(id);

    if (!heroExists) {
      throw new Error('This hero does not exists.');
    }

    return await this.heroRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const heroExists = await this.heroRepository.findById(id);

    if (!heroExists) {
      throw new Error('This hero does not exists.');
    }
    return await this.heroRepository.delete(id);
  }
}
