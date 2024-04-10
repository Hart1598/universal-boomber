import { DynamicModule, Module } from "@nestjs/common";
import { DispatcherCommandController } from "./controllers/command.controller";
import { HttpModule } from "@nestjs/axios";
import { DispatcherService } from "./services/dispatcher.service";
import { DispatcherPrepareService } from "./services/dispatcher-prepare.service";

@Module({})
export class DispatcherModule {
  static forRoot(): DynamicModule {
    return {
      module: DispatcherModule,
      imports: [HttpModule],
      controllers: [DispatcherCommandController],
      providers: [DispatcherService, DispatcherPrepareService],
    };
  }
}
