import { ApiEndpointsListQuery, FindByIdQuery } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";
import { ApiEndpointsService } from "../services/api-endpoints.service";

@Controller()
export class ApiEndpointsQueryController {
  constructor(private readonly apiEndpointsService: ApiEndpointsService) { }

  @RMQRoute(ApiEndpointsListQuery.topic)
  async list(payload: ApiEndpointsListQuery.Request): Promise<ApiEndpointsListQuery.Response> {
    const { take, skip } = payload;

    const items = await this.apiEndpointsService.find({ pagination: { limit: take, offset: skip } });

    return items;
  }

  @RMQRoute(FindByIdQuery.topic)
  async findById(payload: FindByIdQuery.Request): Promise<FindByIdQuery.Response> {
    const { id } = payload;

    const item = await this.apiEndpointsService.findById(id);

    return item;
  }
}
