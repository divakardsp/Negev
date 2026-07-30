import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

// 1. Create a single, shared Postgres pool
export const connectionPool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// 2. Pass the shared pool to Drizzle
// If your Drizzle version is newer, use the { client: pool } syntax
export const db = drizzle({ client: connectionPool }); 

// If you are on an older version of Drizzle and the above throws an error, use:
// export const db = drizzle(connectionPool);