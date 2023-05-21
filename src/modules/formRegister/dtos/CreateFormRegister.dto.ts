import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateFormRegisterDTO {
  @IsNotEmpty({ message: 'O nome não pode ser vazio' })
  user_name: string;

  @IsEmail(undefined, { message: 'O e-mail informado é inválido' })
  @IsNotEmpty({ message: 'O email não pode ser vazio' })
  user_email: string;

  @IsNotEmpty({ message: 'O telefone não pode ser vazio' })
  user_phone: string;

  @IsNotEmpty({ message: 'A descrição do projeto não pode ser vazia' })
  project_description: string;

  @IsNotEmpty({
    message: 'O valor de aceitação dos termos da Leadcode não pode ser vazio.',
  })
  are_terms_accepted: boolean;

  @IsNotEmpty({
    message: 'O id fornecido para form_section não pode ser vazio',
  })
  form_section_id: string;
}
