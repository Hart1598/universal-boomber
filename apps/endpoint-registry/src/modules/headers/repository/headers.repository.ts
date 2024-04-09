import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PG_CONNECTION } from "../../../constants";
import * as schema from '../../../database/drizzle.schema';
import { FindParams, Header, InsertHeader, InsertResult } from "./headers.repository.interfaces";
import { QueryResult } from "pg";
import { eq } from "drizzle-orm";

@Injectable()
export class HeadersRepository {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) { }

  private headers = schema.headers;

  private db = this.conn;

  async insertOne(input: InsertHeader): Promise<InsertResult | null> {
    const results = await this.db.insert(this.headers).values(input).returning({ id: this.headers.id })

    const [result] = results || [];

    return result;
  }

  async deleteById(id: number): Promise<QueryResult<never>> {
    const filter = eq(this.headers.id, id);

    const result = await this.db.delete(this.headers).where(filter);

    return result;
  }

  async findById(id: number): Promise<Header | null> {
    const where = eq(this.headers.id, id);

    const result = await this.db.query.headers.findFirst({
      where,
    });

    return result || null;
  }

  async find(params: FindParams): Promise<Header[]> {
    const { pagination } = params;

    const { limit, offset } = pagination || { limit: 10, offset: 0 };

    const result = await this.db.query.headers.findMany({ limit, offset });

    return result;
  }
}
