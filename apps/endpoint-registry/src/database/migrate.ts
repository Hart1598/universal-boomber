import { INestApplication } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import { Logger } from '@app/logger';
import path from "path";

export const migrateRunner = async (app: INestApplication) => {
  const configService = app.get(ConfigService);

  const logger = app.get(Logger);
  try {
    const POSTGRES_USER = configService.getOrThrow('POSTGRES_USER');
    const POSTGRES_PASSWORD = configService.getOrThrow('POSTGRES_PASSWORD');
    const POSTGRES_HOST = configService.getOrThrow('POSTGRES_HOST');
    const POSTGRES_PORT = configService.getOrThrow('POSTGRES_PORT');
    const POSTGRES_DB = configService.getOrThrow('POSTGRES_DB');

    const DB_URL = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;

    const sql = postgres(DB_URL, { max: 1 })
    const db = drizzle(sql);

    const migrationFolder = path.join(__dirname, "assets/migrations");

    await migrate(db, { migrationsFolder: migrationFolder });

    await sql.end();

    logger.log("Migration complete", "MIGRATE");
  }
  catch (error) {
    logger.error("Migration failed", "MIGRATE", error);
    process.exit(1);
  }
}
