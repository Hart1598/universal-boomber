import { ApiEndpointPresenter, HeaderPresenter, PayloadTemplatePresenter } from "@app/validation";

export interface RunParams {
  endpoint: ApiEndpointPresenter;
  headers?: HeaderPresenter[];
  payloadTemplate: PayloadTemplatePresenter;
  target: string;
}
