import { drizzle } from "drizzle-orm/node-postgres";
import {client} from '@/db/client';

await client.connect();

export const db = drizzle(client);
