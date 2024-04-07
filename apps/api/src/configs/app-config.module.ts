import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfigModuleSettings } from './get-config-module.settings';
import { LoggerModule } from '@app/logger';
import { SERVICE_NAME } from '../constants';

@Module({})
export class AppConfigModule {
  static forRoot() {
    return {
      module: AppConfigModule,
      imports: [ConfigModule.forRoot(getConfigModuleSettings()), LoggerModule.forRootAsync(SERVICE_NAME)],
      controllers: [],
      providers: [],
    };
  }
}
