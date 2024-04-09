import { Pagination } from '@app/types'
import * as schema from '../../../database/drizzle.schema';

export type InsertApiEndpoint = typeof schema.apiEndpoints.$inferInsert;
export type ApiEndpoint = typeof schema.apiEndpoints.$inferSelect;

export interface FindParams {
  pagination?: Pagination;
}

export interface InsertResult {
  id: number;
}
