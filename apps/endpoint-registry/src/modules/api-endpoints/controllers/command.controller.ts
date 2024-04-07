import { ApiEndpointsDeleteCommand, ApiEndpointsCreateCommand } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";

@Controller()
export class ApiEndpointsCommandController {
  @RMQRoute(ApiEndpointsDeleteCommand.topic)
  async delete(payload: ApiEndpointsDeleteCommand.Request): Promise<ApiEndpointsDeleteCommand.Response> {
    return;
  }

  @RMQRoute(ApiEndpointsCreateCommand.topic)
  create(payload: ApiEndpointsCreateCommand.Request): Promise<ApiEndpointsCreateCommand.Response> {
    return;
  }
}
