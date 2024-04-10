import { Pagination } from '@app/types';
import { PayloadTemplatePresenter } from '@app/validation';

export namespace PayloadTemplateQueryCommand {
  export const topic = 'payload-template.query.list';

  export type Request = Pagination & {
    endpointId: number;
  }
  export type Response = PayloadTemplatePresenter[];
}
