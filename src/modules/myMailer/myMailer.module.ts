import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MyMailerService } from './myMailer.service';
import { MyMailerController } from './myMailer.controller';
@Module({
  imports: [
    MailerModule.forRoot({
      transport: 'smtp.gmail.com',
      template: {
        dir: process.cwd() + '/templates/',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [MyMailerService, ConfigService],
  controllers: [MyMailerController],
})
export class MyMailerModule {}
