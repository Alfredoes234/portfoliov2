import pg from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DB_URL,
    max: parseInt(process.env.DB_MAX_CONNECTIONS || "", 10)
});

await pool.connect();

export const db = drizzle(pool, { schema });



