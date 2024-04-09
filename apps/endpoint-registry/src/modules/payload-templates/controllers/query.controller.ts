import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";
import { PayloadTemplateQueryCommand } from "@app/contracts";
import { PayloadTemplatesService } from "../services/payload-templates.service";

@Controller()
export class PayloadTemplatesQueryController {
  constructor(
    private readonly payloadTemplatesService: PayloadTemplatesService,
  ) { }

  @RMQRoute(PayloadTemplateQueryCommand.topic)
  async list(payload: PayloadTemplateQueryCommand.Request): Promise<PayloadTemplateQueryCommand.Response> {
    const { take, skip } = payload;

    const items = await this.payloadTemplatesService.find({ pagination: { limit: take, offset: skip } });

    return items;
  }
}
