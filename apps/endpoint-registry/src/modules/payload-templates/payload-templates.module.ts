import { Module } from "@nestjs/common";
import { DrizzleModule } from "../../database/drizzle.module";
import { PayloadTemplatesControllerController } from "./controllers/command.controller";
import { PayloadTemplatesQueryController } from "./controllers/query.controller";
import { PayloadTemplatesRepository } from "./repositories/payload-templates.repository";
import { PayloadTemplatesService } from "./services/payload-templates.service";

@Module({})
export class PayloadTemplatesModule {
  static forRoot() {
    return {
      module: PayloadTemplatesModule,
      imports: [DrizzleModule],
      controllers: [PayloadTemplatesControllerController, PayloadTemplatesQueryController],
      providers: [PayloadTemplatesRepository, PayloadTemplatesService],
    };
  }
}
