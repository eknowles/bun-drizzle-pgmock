import { mock } from "bun:test";
import { Client } from "pg";
import { PostgresMock } from "pgmock";

mock.module('@/db/client', async () => {
  const pgMock = await PostgresMock.create();
  const client = new Client(pgMock.getNodePostgresConfig());

  return {
    client
  }
})
