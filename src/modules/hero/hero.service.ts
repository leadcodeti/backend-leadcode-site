import { Inject, Injectable } from '@nestjs/common';
import { CreateHeroDTO } from './dtos/CreateHero.dto';
import { HeroRepository } from './repositories/hero.repository';
import { Hero } from '@prisma/client';
import { FileService } from 'src/utils/file';
import { HomeRepository } from '../home/repositories/home.repository';

@Injectable()
export class HeroService {
  constructor(
    @Inject('HeroRepository')
    private readonly heroRepository: HeroRepository,
    @Inject('HomeRepository')
    private readonly homeRepository: HomeRepository,
    private readonly fileService: FileService,
  ) {}

  async create(data: CreateHeroDTO): Promise<Hero> {
    const home = await this.homeRepository.findById(data.homeId);

    if (!home) {
      throw new Error('This home does not exist.');
    }

    const hero = await this.heroRepository.findByKey(data.homeId);

    if (hero) {
      await this.fileService.deleteFile(`./tmp/heros/${hero.key}`);
      await this.heroRepository.delete(data.homeId);
    }

    data.url = `${process.env.HERO_URL}/${data.key}`;

    const homeToUpdateImage = {
      id: data.homeId,
      hero_image: data.url,
      headline: home.headline,
      subheadline: home.subheadline,
      cta_button_text: home.ctaButtonText,
    };

    await this.homeRepository.update(data.homeId, homeToUpdateImage);

    return await this.heroRepository.create(data);
  }

  async list() {
    return await this.heroRepository.findAll();
  }

  async delete(key: string, home_id: string): Promise<void> {
    const heroExists = await this.heroRepository.findByKey(key);
    const home = await this.homeRepository.findById(home_id);

    if (!home) {
      throw new Error('This home does not exist.');
    }

    if (!heroExists) {
      throw new Error('This hero does not exists.');
    }

    await this.fileService.deleteFile(`./tmp/heros/${key}`);

    const homeImageToDelete = {
      id: home.id,
      hero_image: null,
      headline: home.headline,
      subheadline: home.subheadline,
      cta_button_text: home.ctaButtonText,
    };

    await this.homeRepository.update(home_id, homeImageToDelete);

    return await this.heroRepository.delete(key);
  }
}
