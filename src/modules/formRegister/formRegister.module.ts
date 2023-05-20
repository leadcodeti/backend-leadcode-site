import { PrismaService } from 'src/database/prisma.service';
import { PrismaFormRegisterRepository } from './repositories/prisma/prismaFormRegister.repository';
import { FormRegisterController } from './formSection.controller';
import { FormRegisterService } from './formRegister.service';
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MyMailerService } from '../myMailer/myMailer.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
      },
      template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [FormRegisterController],
  providers: [
    FormRegisterService,
    MyMailerService,
    PrismaService,
    {
      provide: 'FormRegisterRepository',
      useClass: PrismaFormRegisterRepository,
    },
  ],
})
export class FormRegisterModule {}
