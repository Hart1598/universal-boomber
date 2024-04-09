import { ApiEndpointsDeleteCommand, ApiEndpointsCreateCommand } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";
import { ApiEndpointsService } from "../services/api-endpoints.service";

@Controller()
export class ApiEndpointsCommandController {
  constructor(private readonly apiEndpointsService: ApiEndpointsService) { }

  @RMQRoute(ApiEndpointsDeleteCommand.topic)
  async delete(payload: ApiEndpointsDeleteCommand.Request): Promise<ApiEndpointsDeleteCommand.Response> {
    return;
  }

  @RMQRoute(ApiEndpointsCreateCommand.topic)
  async create(payload: Required<ApiEndpointsCreateCommand.Request>): Promise<ApiEndpointsCreateCommand.Response> {
    const newItemResult = await this.apiEndpointsService.create(payload);

    const newItem = await this.apiEndpointsService.findById(newItemResult.id);

    return newItem;
  }
}
