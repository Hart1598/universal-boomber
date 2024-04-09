import { HTTP_METHOD, ApiEndpointType, Pagination } from "@app/types";

export interface CreateParams {
  url: string;
  method: HTTP_METHOD;
  type: ApiEndpointType;
}

export interface FindParams {
  pagination: Pagination;
}
