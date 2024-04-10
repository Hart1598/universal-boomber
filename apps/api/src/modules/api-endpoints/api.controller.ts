import { Body, Param, Query } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { ApiEndpointPresenter, CreateEndpointDto, ListEndpointsDto, PaginationDto, } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { ApiEndpointsCreateCommand, ApiEndpointsDeleteCommand, ApiEndpointsListQuery } from "@app/contracts";
import { Pagination } from "@app/types";
import { CreateApiEndpointDocs, DeleteApiEndpointDocs, ListApiEndpointDocs } from "../../docs/swagger";

const MODULE_NAME = "api-endpoints";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class ApiEndpointsApiController {
  constructor(private readonly rmqService: RMQService) { }

  @ListApiEndpointDocs()
  @Route(MODULE_NAME, 'list')
  list(@Query() query: PaginationDto): Promise<ApiEndpointPresenter[]> {
    const { take, skip } = query;

    const offset = take;
    const limit = take;

    return this.rmqService.send<ApiEndpointsListQuery.Request, ApiEndpointsListQuery.Response>(ApiEndpointsListQuery.topic, {
      offset,
      limit,
    })
  }

  @CreateApiEndpointDocs()
  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateEndpointDto): Promise<ApiEndpointPresenter> {
    return this.rmqService.send<ApiEndpointsCreateCommand.Request, ApiEndpointsCreateCommand.Response>(ApiEndpointsCreateCommand.topic, body)
  }

  @DeleteApiEndpointDocs()
  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): Promise<void> {
    return this.rmqService.send<ApiEndpointsDeleteCommand.Request, ApiEndpointsDeleteCommand.Response>(ApiEndpointsDeleteCommand.topic, {
      id,
    })
  }
}
