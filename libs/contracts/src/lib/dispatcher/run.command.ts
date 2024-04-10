import { DispatcherRunDto, DispatcherRunOutputDto } from '@app/validation';

export namespace DispatcherRunCommand {
  export const topic = 'dispatcher.command.run';

  export type Request = DispatcherRunDto

  export type Response = DispatcherRunOutputDto;
}
