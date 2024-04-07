import { ApiEndpointsListQuery } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";

@Controller()
export class ApiEndpointsCommandController {
  @RMQRoute(ApiEndpointsListQuery.topic)
  async list(payload: ApiEndpointsListQuery.Request): Promise<ApiEndpointsListQuery.Response> {
    console.log('ApiEndpointsCommandController.list', payload);

    return [];
  }
}
