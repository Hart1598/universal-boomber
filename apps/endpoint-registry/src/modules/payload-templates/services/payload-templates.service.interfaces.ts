import { Pagination, PayloadTemplateTarget } from "@app/types";

export interface CreateParams {
  endpointId: number;
  template: string;
  target: PayloadTemplateTarget;
  valueTarget: string;
}

export interface FindParams {
  pagination?: Pagination;
}
