import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { CreateUserDTO } from './dto/CreateUser.dto';
import { UserEntity } from './user.entity';
import { v4 as uuid } from 'uuid';
import { ListUserDTO } from './dto/ListUser.dto';
import { UpdateUserDTO } from './dto/UpdateUser.dto.ts';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Usuários')
@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async createUser(@Body() userData: CreateUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = userData.email;
    userEntity.password = userData.password;
    userEntity.name = userData.name;
    userEntity.id = uuid();
    this.userRepository.save(userEntity); ///;
    return {
      user: new ListUserDTO(userEntity.id, userEntity.name),
      message: 'Usuário criado com sucesso!',
    };
  }

  @Get()
  async listUsers() {
    const savedUsers = await this.userRepository.list();
    const usersList = savedUsers.map(
      (user: UserEntity) => new ListUserDTO(user.id, user.name),
    );
    return usersList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() userNewData: UpdateUserDTO,
  ) {
    const updatedUser = await this.userRepository.update(id, userNewData);
    return {
      user: updatedUser,
      message: 'Usuário atualizado com sucesso.',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const removedUser = await this.userRepository.delete(id);
    return {
      user: removedUser,
      message: `Usuário de id ${id} removido com sucesso!`,
    };
  }
}
