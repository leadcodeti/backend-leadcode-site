import { Inject, Injectable } from '@nestjs/common';
import { HomeRepository } from './repositories/home.repository';
import { Home } from '@prisma/client';
import { CreateHomeDTO } from './dtos/CreateHome.dto';
import { UpdateHomeDTO } from './dtos/UpdateHome.dto';

@Injectable()
export class HomeService {
  constructor(
    @Inject('HomeRepository')
    private readonly homeRepository: HomeRepository,
  ) {}

  async create(data: CreateHomeDTO): Promise<Home> {
    const homeExists = await this.homeRepository.findByHeadline(data.headline);

    if (homeExists) {
      throw new Error('This home Already exists.');
    }

    return await this.homeRepository.create(data);
  }

  async list() {
    return await this.homeRepository.findAll();
  }

  async update(id: string, data: UpdateHomeDTO): Promise<Home> {
    const homeExists = await this.homeRepository.findById(id);

    if (!homeExists) {
      throw new Error('This home does not exists.');
    }

    return await this.homeRepository.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return await this.homeRepository.delete(id);
  }
}
