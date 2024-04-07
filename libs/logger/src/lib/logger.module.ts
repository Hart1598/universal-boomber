import { Module } from '@nestjs/common';
import { LoggerModule as LoggerModuleBase } from 'nestjs-pino';
import { getLoggerParams } from './get-logger.params';
import { Logger } from 'nestjs-pino';
@Module({})
export class LoggerModule {
  static async forRootAsync(serviceName: string) {
    return {
      module: LoggerModule,
      imports: [LoggerModuleBase.forRootAsync(getLoggerParams(serviceName))],
      controllers: [],
      providers: [Logger],
      exports: [],
    };
  }
}
