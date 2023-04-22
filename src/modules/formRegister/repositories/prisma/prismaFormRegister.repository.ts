import { Injectable } from '@nestjs/common';
import { CreateFormRegisterDTO } from '../../dtos/CreateFormRegister.dto';
import { FormRegister } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { UpdateFormRegisterDTO } from '../../dtos/UpdateFormRegister.dto';
import { FormRegisterRepository } from '../formRegister.repository';

@Injectable()
export class PrismaFormRegisterRepository implements FormRegisterRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    user_name,
    user_email,
    user_phone,
    project_description,
    are_terms_accepted,
    form_section_id,
  }: CreateFormRegisterDTO): Promise<FormRegister> {
    return await this.prismaService.formRegister.create({
      data: {
        userName: user_name,
        userEmail: user_email,
        userPhone: user_phone,
        projectDescription: project_description,
        areTermsAccepted: are_terms_accepted,
        formSectionId: form_section_id,
        createdAt: new Date(),
      },
    });
  }

  async findAll(): Promise<FormRegister[]> {
    return await this.prismaService.formRegister.findMany();
  }

  async update(id: string, data: UpdateFormRegisterDTO): Promise<FormRegister> {
    return await this.prismaService.formRegister.update({
      data: {
        userName: data.user_name,
        userPhone: data.user_phone,
        projectDescription: data.project_description,
      },
      where: {
        id,
      },
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.formRegister.delete({
      where: {
        id,
      },
    });
  }

  async findById(id: string): Promise<FormRegister> {
    const formRegisterExists = await this.prismaService.formRegister.findUnique(
      {
        where: {
          id,
        },
      },
    );

    return formRegisterExists;
  }
}
