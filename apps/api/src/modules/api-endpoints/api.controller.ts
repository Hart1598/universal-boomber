import { Body, Param } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { ApiEndpointPresenter, CreateEndpointDto, ListEndpointsDto } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { ApiEndpointsCreateCommand, ApiEndpointsDeleteCommand, ApiEndpointsListQuery } from "@app/contracts";

const MODULE_NAME = "api-endpoints";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class ApiEndpointsApiController {
  constructor(private readonly rmqService: RMQService) { }

  @Route(MODULE_NAME, 'list')
  list(@Body() body: ListEndpointsDto): Promise<ApiEndpointPresenter[]> {
    return this.rmqService.send<ApiEndpointsListQuery.Request, ApiEndpointsListQuery.Response>(ApiEndpointsListQuery.topic, body)
  }

  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateEndpointDto): Promise<ApiEndpointPresenter> {
    return this.rmqService.send<ApiEndpointsCreateCommand.Request, ApiEndpointsCreateCommand.Response>(ApiEndpointsCreateCommand.topic, body)
  }

  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): Promise<void> {
    return this.rmqService.send<ApiEndpointsDeleteCommand.Request, ApiEndpointsDeleteCommand.Response>(ApiEndpointsDeleteCommand.topic, {
      id,
    })
  }
}
