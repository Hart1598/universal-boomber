import { DeletePayloadTemplateDto } from '@app/validation';

export namespace PayloadTemplateDeleteCommand {
  export const topic = 'payload-template.command.delete';

  export type Request = DeletePayloadTemplateDto

  export type Response = void;
}
