import { Pagination } from '@app/types'
import * as schema from '../../../database/drizzle.schema';


export type InsertHeader = typeof schema.headers.$inferInsert;
export type Header = typeof schema.headers.$inferSelect;

export interface FindParams {
  pagination?: Pagination;
}

export interface InsertResult {
  id: number;
}
