import { ApiEndpointPresenter, CreateEndpointDto } from '@app/validation';

export namespace ApiEndpointsCreateCommand {
  export const topic = 'api-endpoints.command.create';

  export type Request = CreateEndpointDto

  export type Response = ApiEndpointPresenter;
}
