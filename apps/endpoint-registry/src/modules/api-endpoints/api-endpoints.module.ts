import { Module } from "@nestjs/common";
import { ApiEndpointsCommandController } from "./controllers/command.controller";
import { ApiEndpointsQueryController } from "./controllers/query.controller";

@Module({})
export class ApiEndpointsModule {
  static forRoot() {
    return {
      module: ApiEndpointsModule,
      controllers: [ApiEndpointsCommandController, ApiEndpointsQueryController],
    };
  }
}
