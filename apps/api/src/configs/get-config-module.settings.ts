import { ConfigModuleOptions } from "@nestjs/config";
import { createEnvPath } from "@app/utils";
import { SERVICE_NAME } from "../constants";

export const getConfigModuleSettings = (): ConfigModuleOptions => {
  const env = process.env.NODE_ENV || 'development';

  const envFilePath = createEnvPath(SERVICE_NAME, env);

  return {
    isGlobal: true,
    envFilePath,
  }
}
