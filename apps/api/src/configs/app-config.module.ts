import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { getConfigModuleSettings } from './get-config-module.settings';

@Module({
  imports: [ConfigModule.forRoot(getConfigModuleSettings())],
  controllers: [],
  providers: [],
})
export class AppConfigModule { }
