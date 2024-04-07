import { ApiEndpointPresenter, ListEndpointsDto } from '@app/validation';

export namespace ApiEndpointsListCommand {
  export const topic = 'api-endpoints.query.list';

  export type Request = ListEndpointsDto

  export type Response = ApiEndpointPresenter[];
}
