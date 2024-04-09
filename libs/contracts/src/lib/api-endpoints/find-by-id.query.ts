import { ApiEndpointPresenter } from '@app/validation';

export namespace FindByIdQuery {
  export const topic = 'api-endpoints.query.find-by-id';

  export type Request = {
    id: number;
  }

  export type Response = ApiEndpointPresenter | null;
}
