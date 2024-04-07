import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot()],
      controllers: [],
      providers: [],
    };
  }
}
