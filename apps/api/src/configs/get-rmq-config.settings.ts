import { ConfigModule, ConfigService } from "@nestjs/config";
import { IRMQServiceAsyncOptions } from "nestjs-rmq";

export const getRmqConfigSettings = (exchangeName: string): IRMQServiceAsyncOptions => {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => {
      return {
        exchangeName,
        connections: [
          {
            host: configService.getOrThrow('RMQ_HOST'),
            login: configService.getOrThrow('RMQ_USER'),
            password: configService.getOrThrow('RMQ_PASS'),
            port: configService.getOrThrow('RMQ_PORT'),
          }
        ],
        serviceName: exchangeName,
      }
    }
  }
}
