import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfigModuleSettings } from './get-config-module.settings';
import { LoggerModule } from '@app/logger';
import { SERVICE_NAME } from '../constants';
import { RMQModule } from 'nestjs-rmq';
import { getRmqConfigSettings } from './get-rmq-config.settings';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';

@Module({})
export class AppConfigModule {
  static async forRoot() {
    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.forRoot(getConfigModuleSettings()),
        LoggerModule.forRootAsync(SERVICE_NAME),
        RMQModule.forRootAsync(getRmqConfigSettings('endpoint-registry'))
      ],
      controllers: [],
      providers: [
        {
          provide: APP_PIPE,
          useClass: ZodValidationPipe,
        },
      ],
    };
  }
}
