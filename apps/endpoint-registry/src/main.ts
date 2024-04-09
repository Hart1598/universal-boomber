import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@app/logger';
import { NestApplicationOptions } from '@nestjs/common';
import { migrateRunner } from './database/migrate';

const appOptions: NestApplicationOptions = {
  bufferLogs: true,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot(), appOptions);

  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  const configService = app.get(ConfigService);

  const logger = app.get(Logger);

  app.useLogger(logger);

  const port = configService.getOrThrow('PORT')

  await app.listen(port);

  const appURL = await app.getUrl();

  await migrateRunner(app)

  logger.log(`ENDPOINT REGISTRY is running on: ${appURL}`, 'BOOT');
}

bootstrap();
