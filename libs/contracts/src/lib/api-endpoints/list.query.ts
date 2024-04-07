import { ApiEndpointPresenter, ListEndpointsDto } from '@app/validation';

export namespace ApiEndpointsListQuery {
  export const topic = 'api-endpoints.query.list';

  export type Request = ListEndpointsDto

  export type Response = ApiEndpointPresenter[];
}
