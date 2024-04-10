import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@app/logger';
import { NestApplicationOptions } from '@nestjs/common';

const appOptions: NestApplicationOptions = {
  bufferLogs: true,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(), appOptions);

  const configService = app.get(ConfigService);

  const logger = app.get(Logger);

  app.useLogger(logger);

  const port = configService.getOrThrow('PORT')

  await app.listen(port);

  const appURL = await app.getUrl();

  logger.log(`API DISPATCHER is running on: ${appURL}`, 'BOOT');
}

bootstrap();
