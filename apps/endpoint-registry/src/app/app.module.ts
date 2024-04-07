import { Module } from '@nestjs/common';
import { AppConfigModule } from '../configs';
import { ApiEndpointsCommandController } from '../modules';

@Module({})
export class AppModule {
  static forRoot() {
    return {
      module: AppModule,
      imports: [AppConfigModule.forRoot()],
      controllers: [ApiEndpointsCommandController],
      providers: [],
    };
  }
}
