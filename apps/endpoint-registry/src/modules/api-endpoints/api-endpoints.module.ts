import { Module } from "@nestjs/common";
import { ApiEndpointsCommandController } from "./controllers/command.controller";
import { ApiEndpointsQueryController } from "./controllers/query.controller";
import { DrizzleModule } from "../../database/drizzle.module";
import { ApiEndpointsRepository } from "./repositories/api-endpoints.repository";
import { ApiEndpointsService } from "./services/api-endpoints.service";

@Module({})
export class ApiEndpointsModule {
  static forRoot() {
    return {
      module: ApiEndpointsModule,
      imports: [DrizzleModule],
      controllers: [ApiEndpointsCommandController, ApiEndpointsQueryController],
      providers: [ApiEndpointsRepository, ApiEndpointsService],
    };
  }
}
