import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { json as bodyParserJson } from 'body-parser';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';
import { PORT } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(bodyParserJson({ limit: '5mb' })); // 150kb
  app.use(compression());

  const config = new DocumentBuilder()
    .setTitle('NestJS Project')
    .setDescription('The NestJS API project')
    .setVersion('1.0')
    .addTag('NestJS')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await app.listen(PORT || 3000);
}
bootstrap().then(() => {
  console.log(`Application is running on: ${PORT}`);
});
