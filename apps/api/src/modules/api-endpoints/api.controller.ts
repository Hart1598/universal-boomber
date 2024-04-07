import { Body, Param } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { ApiEndpointPresenter, CreateEndpointDto, ListEndpointsDto } from "@app/validation";

const MODULE_NAME = "api-endpoints";

@ModuleRoute(MODULE_NAME)
export class ApiEndpointsApiController {
  constructor() { }

  @Route(MODULE_NAME, 'list')
  list(@Body() body: ListEndpointsDto): ApiEndpointPresenter[] {
    return null
  }

  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateEndpointDto): ApiEndpointPresenter {
    return null
  }

  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): void {
    return null
  }
}
