import { Body, Param, Query } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { CreatePayloadTemplateDto, ListPayloadTemplateDto, PayloadTemplatePresenter } from "@app/validation";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { PayloadTemplateQueryCommand, PayloadTemplateCreateCommand, PayloadTemplateDeleteCommand } from "@app/contracts";
import { ListPayloadTemplatesDocs } from "../../docs/swagger/payload-templates/list.docs";
import { CreatePayloadTemplateDocs } from "../../docs/swagger/payload-templates/create.docs";
import { DeletePayloadTemplateDocs } from "../../docs/swagger/payload-templates/delete.docs";

const MODULE_NAME = "payload-templates";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class PayloadTemplateApiController {
  constructor(private readonly rmqService: RMQService) { }

  @ListPayloadTemplatesDocs()
  @Route(MODULE_NAME, 'list')
  list(@Query() query: ListPayloadTemplateDto, @Param('id') id: number): Promise<PayloadTemplatePresenter[]> {
    const offset = query.skip
    const limit = query.take

    return this.rmqService.send<PayloadTemplateQueryCommand.Request, PayloadTemplateQueryCommand.Response>(PayloadTemplateQueryCommand.topic, {
      offset,
      limit,
      endpointId: id,
    })
  }

  @CreatePayloadTemplateDocs()
  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreatePayloadTemplateDto): Promise<PayloadTemplatePresenter> {
    return this.rmqService.send<PayloadTemplateCreateCommand.Request, PayloadTemplateCreateCommand.Response>(PayloadTemplateCreateCommand.topic, body)
  }

  @DeletePayloadTemplateDocs()
  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): Promise<void> {
    return this.rmqService.send<PayloadTemplateDeleteCommand.Request, PayloadTemplateDeleteCommand.Response>(PayloadTemplateDeleteCommand.topic, {
      id,
    })
  }
}
