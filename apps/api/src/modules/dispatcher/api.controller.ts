import { Body } from "@nestjs/common";
import { ModuleRoute, Route } from "../../decorators";
import { ApiTags } from "@nestjs/swagger";
import { RMQService } from "nestjs-rmq";
import { DispatcherRunCommand } from "@app/contracts";
import { DispatcherRunDto } from "@app/validation";
import { DispatcherRunDocs } from "../../docs/swagger";

const MODULE_NAME = "dispatcher";

@ModuleRoute(MODULE_NAME)
@ApiTags(MODULE_NAME)
export class DispatcherApiController {
  constructor(private readonly rmqService: RMQService) { }

  @DispatcherRunDocs()
  @Route(MODULE_NAME, 'run')
  run(@Body() body: DispatcherRunDto): Promise<DispatcherRunCommand.Response> {
    return this.rmqService.send<DispatcherRunCommand.Request, DispatcherRunCommand.Response>(DispatcherRunCommand.topic, body)
  }
}
