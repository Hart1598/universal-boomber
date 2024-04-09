import { Controller } from "@nestjs/common";
import { RMQError, RMQRoute, RMQService } from "nestjs-rmq";
import { PayloadTemplateDeleteCommand, PayloadTemplateCreateCommand, FindByIdQuery } from "@app/contracts";
import { PayloadTemplatesService } from "../services/payload-templates.service";
import { ERROR_TYPE } from "nestjs-rmq/dist/constants";
import { ERROR_CODE } from "@app/utils";

@Controller()
export class PayloadTemplatesControllerController {
  constructor(
    private readonly payloadTemplatesService: PayloadTemplatesService,
    private readonly rmqService: RMQService,
  ) { }

  @RMQRoute(PayloadTemplateDeleteCommand.topic)
  async delete(payload: PayloadTemplateDeleteCommand.Request): Promise<PayloadTemplateDeleteCommand.Response> {
    const item = await this.payloadTemplatesService.findById(payload.id);

    if (!item) throw new RMQError('Item not found', ERROR_TYPE.RMQ, ERROR_CODE.NOT_FOUND, payload, 'api-endpoints', 'api-endpoints');

    await this.payloadTemplatesService.delete(payload.id);

    return null;
  }

  @RMQRoute(PayloadTemplateCreateCommand.topic)
  async create(payload: Required<PayloadTemplateCreateCommand.Request>): Promise<PayloadTemplateCreateCommand.Response> {
    const { endpointId } = payload;

    const endpoint = await this.rmqService.send<FindByIdQuery.Request, FindByIdQuery.Response>(FindByIdQuery.topic, { id: endpointId });

    if (!endpoint) throw new RMQError('Endpoint not found', ERROR_TYPE.RMQ, ERROR_CODE.NOT_FOUND, payload, 'api-endpoints', 'api-endpoints');

    const newItemResult = await this.payloadTemplatesService.create(payload);

    const newItem = await this.payloadTemplatesService.findById(newItemResult.id);

    return newItem;
  }
}
