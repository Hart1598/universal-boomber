import { Inject, Injectable } from "@nestjs/common";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { PG_CONNECTION } from "../../../constants";
import * as schema from '../../../database/drizzle.schema';
import { FindParams, PayloadTemplate, InsertPayloadTemplate, InsertResult } from "./payload-templates.repository.interfaces";
import { QueryResult } from "pg";
import { eq } from "drizzle-orm";

@Injectable()
export class PayloadTemplatesRepository {
  constructor(
    @Inject(PG_CONNECTION) private conn: NodePgDatabase<typeof schema>,
  ) { }

  private payloadTemplates = schema.payloadTemplates;

  private db = this.conn;

  async insertOne(input: InsertPayloadTemplate): Promise<InsertResult | null> {
    const results = await this.db.insert(this.payloadTemplates).values(input).returning({ id: this.payloadTemplates.id })

    const [result] = results || [];

    return result;
  }

  async deleteById(id: number): Promise<QueryResult<never>> {
    const filter = eq(this.payloadTemplates.id, id);

    const result = await this.db.delete(this.payloadTemplates).where(filter);

    return result;
  }

  async findById(id: number): Promise<PayloadTemplate | null> {
    const where = eq(this.payloadTemplates.id, id);

    const result = await this.db.query.payloadTemplates.findFirst({
      where,
    });

    return result || null;
  }

  async find(params: FindParams): Promise<PayloadTemplate[]> {
    const { pagination, endpointId } = params;

    const { limit, offset } = pagination || { limit: 10, offset: 0 };

    const result = await this.db.query.payloadTemplates.findMany({
      limit,
      offset,
      where: ((payloadTemplates, { eq }) => eq(payloadTemplates.endpointId, endpointId)),
    })

    return result;
  }
}
