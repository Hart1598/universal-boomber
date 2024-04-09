import { ApiEndpointsDeleteCommand, ApiEndpointsCreateCommand } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQError, RMQRoute } from "nestjs-rmq";
import { ApiEndpointsService } from "../services/api-endpoints.service";
import { ERROR_TYPE } from "nestjs-rmq/dist/constants";
import { ERROR_CODE } from "@app/utils";

@Controller()
export class ApiEndpointsCommandController {
  constructor(private readonly apiEndpointsService: ApiEndpointsService) { }

  @RMQRoute(ApiEndpointsDeleteCommand.topic)
  async delete(payload: ApiEndpointsDeleteCommand.Request): Promise<ApiEndpointsDeleteCommand.Response> {
    const item = await this.apiEndpointsService.findById(payload.id);

    if (!item) throw new RMQError('Item not found', ERROR_TYPE.RMQ, ERROR_CODE.NOT_FOUND, payload, 'api-endpoints', 'api-endpoints');

    await this.apiEndpointsService.delete(payload.id);

    return null;
  }

  @RMQRoute(ApiEndpointsCreateCommand.topic)
  async create(payload: Required<ApiEndpointsCreateCommand.Request>): Promise<ApiEndpointsCreateCommand.Response> {
    const newItemResult = await this.apiEndpointsService.create(payload);

    const newItem = await this.apiEndpointsService.findById(newItemResult.id);

    return newItem;
  }
}
