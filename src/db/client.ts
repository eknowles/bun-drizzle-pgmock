import { Client } from "pg";

export const client = new Client({
  connectionString: Bun.env.DB_URL,
});
