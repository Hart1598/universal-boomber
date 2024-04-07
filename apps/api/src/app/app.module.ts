import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { LoggerModule } from '@app/logger';
import { SERVICE_NAME } from '../constants';

@Module({
  imports: [AppConfigModule, LoggerModule.forRootAsync(SERVICE_NAME)],
  controllers: [],
  providers: [],
})
export class AppModule { }
