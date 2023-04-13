import { Module } from '@nestjs/common';
import { UserController } from './user.controller.service';
import { UserRepository } from './user.repository';
import { IsEmailUniqueValidator } from './validation/is-unique-email-validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, IsEmailUniqueValidator],
})
export class UserModule {}
