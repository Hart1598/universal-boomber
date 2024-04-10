import { Pagination } from '@app/types';
import { ApiEndpointPresenter } from '@app/validation';

export namespace ApiEndpointsListQuery {
  export const topic = 'api-endpoints.query.list';

  export type Request = Pagination

  export type Response = ApiEndpointPresenter[];
}
