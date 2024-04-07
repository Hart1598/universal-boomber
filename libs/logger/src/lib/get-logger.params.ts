import { ConfigModule, ConfigService } from "@nestjs/config";
import { LoggerModuleAsyncParams, Params } from "nestjs-pino";
import { v4 as uuidv4 } from 'uuid'

export const getLoggerParams = (serviceName: string): LoggerModuleAsyncParams => {
  return {
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => {
      const env = config.getOrThrow('NODE_ENV', 'development');

      const logName = `pino-log-${serviceName}-${env}`;

      const pinoHttp: Params['pinoHttp'] = {
        name: logName,
        level: config.getOrThrow('LOG_LEVEL', 'info'),
        genReqId: (request) => request.headers['x-correlation-id'] || uuidv4(),
        redact: ['req.headers.authorization'],
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      };

      return {
        pinoHttp,
      };
    },
  };
}
