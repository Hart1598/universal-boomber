export const createEnvPath = (serviceName: string, env: string) => {
  return `envs/.env.${serviceName}.${env}`;
}
