import { ApiEndpointsListQuery } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";

@Controller()
export class ApiEndpointsQueryController {
  @RMQRoute(ApiEndpointsListQuery.topic)
  async list(payload: ApiEndpointsListQuery.Request): Promise<ApiEndpointsListQuery.Response> {
    return [];
  }
}
