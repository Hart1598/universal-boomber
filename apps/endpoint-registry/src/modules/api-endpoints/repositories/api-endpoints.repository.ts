import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from '../../../database/drizzle.schema';
import { PG_CONNECTION } from "../../../constants";
import { QueryResult } from "pg";
import { eq } from "drizzle-orm";
import { InsertApiEndpoint, ApiEndpoint, FindParams, InsertResult } from "./api-endpoints.repository.interfaces";

@Injectable()
export class ApiEndpointsRepository {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) { }

  private apiEndpoints = schema.apiEndpoints;

  private db = this.conn;

  async insertOne(input: InsertApiEndpoint): Promise<InsertResult | null> {
    const results = await this.db.insert(this.apiEndpoints).values(input).returning({ id: this.apiEndpoints.id })

    const [result] = results || [];

    return result;
  }

  async deleteById(id: number): Promise<QueryResult<never>> {
    const filter = eq(this.apiEndpoints.id, id);

    const result = await this.db.delete(this.apiEndpoints).where(filter);

    return result;
  }

  async findById(id: number): Promise<ApiEndpoint | null> {
    const where = eq(this.apiEndpoints.id, id);

    const result = await this.db.query.apiEndpoints.findFirst({
      where,
    });

    return result || null;
  }

  async find(params: FindParams): Promise<ApiEndpoint[]> {
    const { pagination } = params;

    const { limit, offset } = pagination || { limit: 10, offset: 0 };

    const result = await this.db.query.apiEndpoints.findMany({ limit, offset });

    return result;
  }
}
