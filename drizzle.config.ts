import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    schema: './utils/db/schema.ts',
    out: './drizzle',
    dialect: 'postgresql',
    dbCredentials: {
        host: 'localhost',
        user: 'main',
        password: "development",
        database: 'portfolio'
    },
})