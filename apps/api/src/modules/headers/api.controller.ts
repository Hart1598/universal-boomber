import { Body, Param } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { CreateHeaderDto, HeaderPresenter, ListHeadersDto } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";

const MODULE_NAME = "headers";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class HeadersApiController {
  constructor() { }

  @Route(MODULE_NAME, 'list')
  list(@Body() body: ListHeadersDto): HeaderPresenter[] {
    return null
  }

  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateHeaderDto): HeaderPresenter {
    return null
  }

  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): void {
    return null
  }
}
