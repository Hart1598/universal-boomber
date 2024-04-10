import { Pagination } from '@app/types'
import * as schema from '../../../database/drizzle.schema';

export type InsertPayloadTemplate = typeof schema.payloadTemplates.$inferInsert;
export type PayloadTemplate = typeof schema.payloadTemplates.$inferSelect;

export interface FindParams {
  endpointId: number;
  pagination?: Pagination;
}

export interface InsertResult {
  id: number;
}
