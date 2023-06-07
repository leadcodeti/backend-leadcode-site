import { Hero } from '@prisma/client';
import { CreateHeroDTO } from '../dtos/CreateHero.dto';

export interface HeroRepository {
  create(data: CreateHeroDTO): Promise<Hero>;
  findAll(): Promise<Hero[]>;
  delete(key: string): Promise<void>;
  findByKey(key: string): Promise<Hero>;
}
