import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Leadcode site API')
    .setDescription('Essa é a documentação da API do site da Leadcode.')
    .setVersion('1.0')
    .addTag('leadcode')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      // whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  );
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
  app.useStaticAssets('tmp/heros', {
    prefix: '/heros',
  });
  app.useStaticAssets('tmp/topFooterLogos', {
    prefix: '/top_footer_logos',
  });
  app.useStaticAssets('tmp/socialMediaIcons', {
    prefix: '/social_media_icons',
  });
  app.useStaticAssets('tmp/projectCardImages', {
    prefix: '/project_card_images',
  });
  app.useStaticAssets('tmp/serviceCardImages', {
    prefix: '/service_card_images',
  });

  await app.listen(3334 || process.env.PORT);
}
bootstrap();
