import { DispatcherRunCommand } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";

@Controller()
export class DispatcherCommandController {
  constructor() { }

  @RMQRoute(DispatcherRunCommand.topic)
  async run(payload: DispatcherRunCommand.Request): Promise<DispatcherRunCommand.Response> {
    return null;
  }
}
