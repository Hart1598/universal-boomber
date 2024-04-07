import { ListPayloadTemplateDto, PayloadTemplatePresenter } from '@app/validation';

export namespace PayloadTemplateQueryCommand {
  export const topic = 'payload-template.query.list';

  export type Request = ListPayloadTemplateDto

  export type Response = PayloadTemplatePresenter[];
}
