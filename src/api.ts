import { Elysia, t } from "elysia";
import { users, insertUserSchema, selectUserSchema } from "@/db/schema";
import { db } from '@/db/connection';

const api = new Elysia()
  .get('/', async () => {
      return db.select().from(users);
    },
    {
      detail: {
        summary: "Get all users",
      },
      response: t.Array(selectUserSchema)
    }
  )
  .post('/', async ({body}) => {
      const [inserted] = await db.insert(users).values(body).returning();
      return inserted;
    },
    {
      detail: {
        summary: "Create user",
      },
      body: t.Omit(insertUserSchema, ['id']),
      response: selectUserSchema
    }
  )
  .delete('/', async () => {
      return db.delete(users).returning();
    },
    {
      detail: {
        summary: "Delete all users",
      },
      response: t.Array(selectUserSchema)
    }
  )

export { api };
export type API = typeof api;
