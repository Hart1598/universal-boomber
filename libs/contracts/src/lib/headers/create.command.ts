import { CreateHeaderDto, HeaderPresenter } from '@app/validation';

export namespace HeaderCreateCommand {
  export const topic = 'headers.command.create';

  export type Request = CreateHeaderDto

  export type Response = HeaderPresenter
}
