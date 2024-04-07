import { DeleteEndpointDto } from '@app/validation';

export namespace ApiEndpointsDeleteCommand {
  export const topic = 'api-endpoints.command.delete';

  export type Request = DeleteEndpointDto

  export type Response = void;
}
