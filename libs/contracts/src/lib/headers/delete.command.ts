import { DeleteHeaderDto } from '@app/validation';

export namespace HeaderDeleteCommand {
  export const topic = 'headers.command.delete';

  export type Request = DeleteHeaderDto

  export type Response = void;
}
