import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfigModuleSettings } from './get-config-module.settings';
import { LoggerModule } from '@app/logger';
import { SERVICE_NAME } from '../constants';
import { getRmqConfigSettings } from './get-rmq-config.settings';
import { RMQModule } from 'nestjs-rmq';

@Module({})
export class AppConfigModule {
  static async forRoot() {
    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.forRoot(getConfigModuleSettings()),
        LoggerModule.forRootAsync(SERVICE_NAME),
        RMQModule.forRootAsync(getRmqConfigSettings(SERVICE_NAME))
      ],
      controllers: [],
      providers: [],
    };
  }
}
