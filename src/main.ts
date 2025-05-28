import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { envs } from "./config";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const logger = new Logger("Api-Gateway");

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(envs.port);
  logger.log(`Api-Gateway is running on port ${envs.port}`);
}
bootstrap();
