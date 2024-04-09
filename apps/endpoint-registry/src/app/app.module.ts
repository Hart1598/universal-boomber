import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { ApiEndpointsModule, HeadersModule } from '../modules';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot(), ApiEndpointsModule.forRoot(), HeadersModule.forRoot()],
      controllers: [],
      providers: [],
    };
  }
}
