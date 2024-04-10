import { DynamicModule, Module } from "@nestjs/common";

@Module({})
export class DispatcherModule {
  static forRoot(): DynamicModule {
    return {
      module: DispatcherModule,
      imports: [],
      controllers: [],
      providers: [],
    };
  }
}
