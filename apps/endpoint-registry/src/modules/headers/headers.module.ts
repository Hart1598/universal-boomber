import { Module } from "@nestjs/common";
import { DrizzleModule } from "../../database/drizzle.module";
import { HeadersCommandController } from "./controllers/command.controller";
import { HeadersQueryController } from "./controllers/query.controller";
import { HeadersRepository } from "./repository/headers.repository";
import { HeadersService } from "./services/headers.service";

@Module({})
export class HeadersModule {
  static forRoot() {
    return {
      module: HeadersModule,
      imports: [DrizzleModule],
      controllers: [HeadersCommandController, HeadersQueryController],
      providers: [HeadersRepository, HeadersService],
    };
  }
}
