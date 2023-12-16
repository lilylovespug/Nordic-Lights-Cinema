import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as serveStatic from 'serve-static';
import { join } from 'path';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.use('', serveStatic(join(__dirname, '..', 'public')));
  await app.listen(5000);
}

bootstrap();