import { Hero } from '@prisma/client';
import { CreateHeroDTO } from '../dtos/CreateHero.dto';
import { UpdateHeroDTO } from '../dtos/UpdateHero.dto';

export interface HeroRepository {
  create(data: CreateHeroDTO): Promise<Hero>;
  findAll(): Promise<Hero[]>;
  update(key: string, data: UpdateHeroDTO): Promise<Hero>;
  delete(key: string): Promise<void>;
  findById(key: string): Promise<Hero>;
}
