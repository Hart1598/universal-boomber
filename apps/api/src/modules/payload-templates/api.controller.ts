import { Body, Param } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { CreatePayloadTemplate, ListPayloadTemplateDto, PayloadTemplatePresenter } from "@app/validation";

const MODULE_NAME = "payload-templates";

@ModuleRoute(MODULE_NAME)
export class PayloadTemplateApiController {
  constructor() { }

  @Route(MODULE_NAME, 'list')
  list(@Body() body: ListPayloadTemplateDto): PayloadTemplatePresenter[] {
    return null
  }

  @Route(MODULE_NAME, 'create')
  create(@Body() body: CreatePayloadTemplate): PayloadTemplatePresenter {
    return null
  }

  @Route(MODULE_NAME, 'delete')
  delete(@Param('id') id: number): void {
    return null
  }
}
