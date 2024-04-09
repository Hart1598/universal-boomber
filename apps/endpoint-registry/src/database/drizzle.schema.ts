import { pgTable, serial, varchar, text, integer } from 'drizzle-orm/pg-core';

export const apiEndpoints = pgTable('api_endpoints', {
  id: serial('endpointId').primaryKey().notNull(),
  url: varchar('url').notNull().unique(),
  method: varchar('method').notNull(),
});

export const headers = pgTable('headers', {
  id: serial('headerId').primaryKey().notNull(),
  endpointId: integer('endpointId')
    .notNull()
    .references(() => apiEndpoints.id),
  key: varchar('key').notNull(),
  value: varchar('value').notNull(),
});

export const payloadTemplates = pgTable('payload_templates', {
  id: serial('templateId').primaryKey().notNull(),
  endpointId: integer('endpointId')
    .notNull()
    .references(() => apiEndpoints.id),
  template: text('template').notNull(),
  target: varchar('target').notNull(),
  valueTarget: varchar('valueTarget').notNull(),
});
