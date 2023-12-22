import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// ? main.ts is the entry file of the application

async function bootstrap() {
  // ? NestFactory is the entry point of the Nest application
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
