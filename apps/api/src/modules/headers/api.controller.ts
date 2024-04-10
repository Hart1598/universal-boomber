import { Body, Param, Query } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { CreateHeaderDto, HeaderPresenter, ListHeadersDto } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { HeaderCreateCommand, HeaderQueryCommand, HeaderDeleteCommand } from "@app/contracts";
import { ListHeadersDocs } from "../../docs/swagger/headers/list.docs";
import { CreateHeaderDocs } from "../../docs/swagger/headers/create.docs";
import { DeleteHeaderDocs } from "../../docs/swagger/headers/delete.docs";

const MODULE_NAME = "headers";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class HeadersApiController {
  constructor(private readonly rmqService: RMQService) { }

  @ListHeadersDocs()
  @Route(MODULE_NAME, 'list')
  list(@Query() query: ListHeadersDto, @Param('id') id: number): Promise<HeaderPresenter[]> {
    const offset = query.skip
    const limit = query.take

    return this.rmqService.send<HeaderQueryCommand.Request, HeaderQueryCommand.Response>(HeaderQueryCommand.topic, { offset, limit, endpointId: id })
  }

  @CreateHeaderDocs()
  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreateHeaderDto): Promise<HeaderPresenter> {
    return this.rmqService.send<HeaderCreateCommand.Request, HeaderCreateCommand.Response>(HeaderCreateCommand.topic, body)
  }

  @DeleteHeaderDocs()
  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): Promise<void> {
    return this.rmqService.send<HeaderDeleteCommand.Request, HeaderDeleteCommand.Response>(HeaderDeleteCommand.topic, { id })
  }
}
