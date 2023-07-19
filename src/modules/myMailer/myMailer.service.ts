import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { google } from 'googleapis';
import { Options } from 'nodemailer/lib/smtp-transport';

@Injectable()
export class MyMailerService {
  constructor(
    private readonly configService: ConfigService,
    private readonly mailerService: MailerService,
  ) {}

  private async setTransport() {
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(
      this.configService.get<string>('gmail.client_id'),
      this.configService.get<string>('gmail.client_secret'),
      'https://developers.google.com/oauthplayground',
    );

    oauth2Client.setCredentials({
      refresh_token: this.configService.get<string>('gmail.refresh_token'),
    });

    const accessToken: string = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject('Failed to create access token');
          console.log(err);
        }
        resolve(token);
      });
    });

    const config: Options = {
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: this.configService.get<string>('gmail.leadcode_email'),
        clientId: this.configService.get<string>('gmail.client_id'),
        clientSecret: this.configService.get<string>('gmail.client_secret'),
        accessToken,
      },
    };
    this.mailerService.addTransporter('gmail', config);
  }

  public async sendMail(
    userMail: string,
    projectDescription: string,
    userName: string,
    userPhone: string,
  ) {
    await this.setTransport();
    this.mailerService
      .sendMail({
        transporterName: 'gmail',
        to: this.configService.get<string>('gmail.leadcode_email'), // list of receivers
        from: this.configService.get<string>('gmail.leadcode_email'), // sender address
        subject: `${userName} - descrição de projeto`, // Subject line
        template: 'confirmation.hbs',
        context: {
          userMail,
          userName,
          projectDescription,
          userPhone,
        },
      })
      .then((success) => {
        console.log(success);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
