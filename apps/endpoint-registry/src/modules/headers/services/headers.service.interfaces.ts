import { Pagination } from "@app/types";

export interface CreateParams {
  endpointId: number;
  key: string;
  value: string;
}

export interface FindParams {
  pagination?: Pagination;
}
