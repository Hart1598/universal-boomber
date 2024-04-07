import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { ApiEndpointsModule } from '../modules';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot(), ApiEndpointsModule.forRoot()],
      controllers: [],
      providers: [],
    };
  }
}
