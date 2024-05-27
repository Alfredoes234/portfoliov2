import 'dotenv/config';
import { db, pool } from './db';
import { migrate } from 'drizzle-orm/node-postgres/migrator';

const run_migrations = async () => {
    console.log("Migration Started...");
    await migrate(db, { migrationsFolder: './drizzle' });
    console.log("Migration completed")
    process.exit();
}

run_migrations().catch((err) => {
    console.log("Error trying to migrate: ", err);
    process.exit()
})
