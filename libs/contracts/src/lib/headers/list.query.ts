import { Pagination } from '@app/types';
import { HeaderPresenter } from '@app/validation';

export namespace HeaderQueryCommand {
  export const topic = 'headers.query.list';

  export type Request = Pagination & {
    endpointId: number;
  }

  export type Response = HeaderPresenter[];
}
