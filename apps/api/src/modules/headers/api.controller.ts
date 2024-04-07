import { Body, Param, Query } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { CreateHeaderDto, HeaderPresenter, ListHeadersDto } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { HeaderCreateCommand, HeaderQueryCommand, HeaderDeleteCommand } from "@app/contracts";

const MODULE_NAME = "headers";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class HeadersApiController {
  constructor(private readonly rmqService: RMQService) { }

  @Route(MODULE_NAME, 'list')
  list(@Query() query: ListHeadersDto): Promise<HeaderPresenter[]> {
    return this.rmqService.send<HeaderQueryCommand.Request, HeaderQueryCommand.Response>(HeaderQueryCommand.topic, query)
  }

  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateHeaderDto): Promise<HeaderPresenter> {
    return this.rmqService.send<HeaderCreateCommand.Request, HeaderCreateCommand.Response>(HeaderCreateCommand.topic, body)
  }

  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): Promise<void> {
    return this.rmqService.send<HeaderDeleteCommand.Request, HeaderDeleteCommand.Response>(HeaderDeleteCommand.topic, { id })
  }
}
