import { CreatePayloadTemplateDto, PayloadTemplatePresenter } from '@app/validation';

export namespace PayloadTemplateCreateCommand {
  export const topic = 'payload-template.command.create';

  export type Request = CreatePayloadTemplateDto

  export type Response = PayloadTemplatePresenter
}
