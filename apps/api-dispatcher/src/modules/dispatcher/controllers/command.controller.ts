import { DispatcherRunCommand } from "@app/contracts";
import { Controller } from "@nestjs/common";
import { RMQRoute } from "nestjs-rmq";
import { DispatcherService } from "../services/dispatcher.service";
import { DispatcherPrepareService } from "../services/dispatcher-prepare.service";

@Controller()
export class DispatcherCommandController {
  constructor(
    private readonly dispatcherService: DispatcherService,
    private readonly dispatcherPrepareService: DispatcherPrepareService,
  ) { }

  @RMQRoute(DispatcherRunCommand.topic)
  async run(payload: DispatcherRunCommand.Request): Promise<DispatcherRunCommand.Response> {
    const { rounds, target } = payload;

    const params = await this.dispatcherPrepareService.prepareParams(target);

    const promises = params.map(async (param) => {
      return this.dispatcherService.run(param)
    })

    const result = await Promise.allSettled(promises);

    const successCount = result.filter((res) => res.status === 'fulfilled').length;

    return {
      status: 'success',
      sendCount: successCount,
    }
  }
}
