import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { DispatcherModule } from '../modules/dispatcher/dispatcher.module';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot(), DispatcherModule.forRoot()],
      controllers: [],
      providers: [],
    };
  }
}
