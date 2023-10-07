import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true, // bad request si hya propiedades no requeridas
      whitelist: true, // quita lo que no esta definiod en dto
    }),
  );

  app.setGlobalPrefix('api/v2'); //estableciendo un global prefix antes de las rutas

  await app.listen(3000);
}
bootstrap();
