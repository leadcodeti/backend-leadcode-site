import { Hero } from '@prisma/client';
import { CreateHeroDTO } from '../dtos/CreateHero.dto';
import { UpdateHeroDTO } from '../dtos/UpdateHero.dto';

export interface HeroRepository {
  create(data: CreateHeroDTO): Promise<Hero>;
  findAll(): Promise<Hero[]>;
  update(id: string, data: UpdateHeroDTO): Promise<Hero>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Hero>;
}
