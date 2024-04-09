import { Module } from '@nestjs/common';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import { PG_CONNECTION } from '../constants';
import * as schema from './drizzle.schema';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    {
      provide: PG_CONNECTION,
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const user = configService.get<string>('POSTGRES_USER');
        const password = configService.get<string>('POSTGRES_PASSWORD');
        const host = configService.get<string>('POSTGRES_HOST');
        const port = configService.get<string>('POSTGRES_PORT');
        const database = configService.get<string>('POSTGRES_DB');
        const ssl = configService.get<boolean>('POSTGRES_SSL', false);

        const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

        const pool = new Pool({
          connectionString,
          ssl,
        });

        return drizzle(pool, { schema });
      },
    },
  ],
  exports: [PG_CONNECTION],
})
export class DrizzleModule { }
