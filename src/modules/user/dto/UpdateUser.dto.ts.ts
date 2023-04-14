import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { IsEmailUnique } from '../validation/is-unique-email-validator';

export class UpdateUserDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @IsEmailUnique({ message: 'Já existe um usuário com este email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'A senha precisa ter pelo menos 6 caracteres' })
  @IsOptional()
  password: string;
}
