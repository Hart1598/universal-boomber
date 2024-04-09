import { Controller } from "@nestjs/common";
import { RMQError, RMQRoute, RMQService } from "nestjs-rmq";
import { FindByIdQuery, HeaderCreateCommand, HeaderDeleteCommand } from "@app/contracts";
import { ERROR_TYPE } from "nestjs-rmq/dist/constants";
import { ERROR_CODE } from "@app/utils";
import { HeadersService } from "../services/headers.service";

@Controller()
export class HeadersCommandController {
  constructor(
    private readonly headersService: HeadersService,
    private readonly rmqService: RMQService,
  ) { }

  @RMQRoute(HeaderDeleteCommand.topic)
  async delete(payload: HeaderDeleteCommand.Request): Promise<HeaderDeleteCommand.Response> {
    const item = await this.headersService.findById(payload.id);

    if (!item) throw new RMQError('Item not found', ERROR_TYPE.RMQ, ERROR_CODE.NOT_FOUND, payload, 'api-endpoints', 'api-endpoints');

    await this.headersService.delete(payload.id);

    return null;
  }

  @RMQRoute(HeaderCreateCommand.topic)
  async create(payload: Required<HeaderCreateCommand.Request>): Promise<HeaderCreateCommand.Response> {
    const { endpointId } = payload;

    const endpoint = await this.rmqService.send<FindByIdQuery.Request, FindByIdQuery.Response>(FindByIdQuery.topic, { id: endpointId });

    if (!endpoint) throw new RMQError('Endpoint not found', ERROR_TYPE.RMQ, ERROR_CODE.NOT_FOUND, payload, 'api-endpoints', 'api-endpoints');

    const newItemResult = await this.headersService.create(payload);

    const newItem = await this.headersService.findById(newItemResult.id);

    return newItem;
  }
}
