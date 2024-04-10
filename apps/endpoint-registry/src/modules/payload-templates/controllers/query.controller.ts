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
    const { limit, offset, endpointId } = payload;

    const items = await this.payloadTemplatesService.find({ pagination: { limit, offset }, endpointId });

    return items;
  }
}
