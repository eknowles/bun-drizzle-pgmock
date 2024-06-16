import { swagger } from '@elysiajs/swagger'
import { Elysia, t } from 'elysia'
import { api } from './api'

const app = new Elysia()
  .use(swagger())
  .use(api)
  .onStart(() => {
    console.log(`Listening on http://localhost:${Bun.env.PORT}`)
  })
  .listen(Bun.env.PORT);

export type App = typeof app;
