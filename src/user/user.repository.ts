import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity): Promise<void> {
    this.users.push(user);
  }

  async list(): Promise<UserEntity[]> {
    return this.users;
  }

  async existsWithEmail(email: string) {
    const possibleUser = this.users.find(
      (user: UserEntity) => user.email === email,
    );

    return possibleUser !== undefined;
  }

  async update(id: string, userNewData: Partial<UserEntity>) {
    const user = this.findById(id);

    Object.entries(userNewData).forEach(([key, value]) => {
      if (key === 'id') {
        return;
      }

      user[key] = value;
    });

    return user;
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter((savedUser) => savedUser.id !== id);
  }

  private findById(id: string) {
    const possibleUser = this.users.find((savedUser) => savedUser.id === id);

    if (!possibleUser) {
      throw new Error('Usuário não existe');
    }

    return possibleUser;
  }
}
