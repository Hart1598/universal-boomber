import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { ApiEndpointsApiController, DispatcherApiController, HeadersApiController, PayloadTemplateApiController } from '../modules';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot()],
      controllers: [ApiEndpointsApiController, HeadersApiController, PayloadTemplateApiController, DispatcherApiController],
      providers: [],
    };
  }
}
