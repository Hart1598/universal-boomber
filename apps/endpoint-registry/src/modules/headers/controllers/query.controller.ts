import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";
import { HeaderQueryCommand } from "@app/contracts";
import { HeadersService } from "../services/headers.service";

@Controller()
export class HeadersQueryController {
  constructor(
    private readonly headersService: HeadersService,
  ) { }

  @RMQRoute(HeaderQueryCommand.topic)
  async list(payload: HeaderQueryCommand.Request): Promise<HeaderQueryCommand.Response> {
    const { offset, limit, endpointId } = payload;

    const items = await this.headersService.find({ pagination: { limit, offset }, endpointId });

    return items;
  }
}
