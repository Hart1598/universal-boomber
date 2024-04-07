import { ListHeadersDto, HeaderPresenter } from '@app/validation';

export namespace HeaderQueryCommand {
  export const topic = 'headers.query.list';

  export type Request = ListHeadersDto

  export type Response = HeaderPresenter[];
}
