import { Logger } from "@app/logger";
import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { patchNestJsSwagger } from 'nestjs-zod'

patchNestJsSwagger()

export const setUpSwagger = (app: INestApplication) => {
  const configService = app.get(ConfigService);

  const isEnableSwagger = Number(configService.get<string>('IS_ENABLE_SWAGGER'));

  if (!isEnableSwagger) return

  const config = new DocumentBuilder()
    .setTitle('Universe boomber')
    .setDescription('Api')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  const logger = app.get(Logger);

  logger.log('Swagger is enabled', 'SWAGGER');
}
