import { describe, it, expect } from 'bun:test';
import { treaty } from '@elysiajs/eden';
import { api } from './api';

describe('api', () => {
  it('should have an export', () => {
    expect(api).toBeDefined();
  });

  it('should have a get endpoint', () => {
    const client = treaty(api);
    expect(client.index.get).toBeDefined();
  });

  it('should have a postgres', () => {
    const client = treaty(api);
    expect(client.index.get()).toEqual(1);
  })

  it('should have a post endpoint', () => {
    const client = treaty(api);
    expect(client.index.post).toBeDefined();
  });

  it('should have a delete endpoint', () => {
    const client = treaty(api);
    expect(client.index.delete).toBeDefined();
  });
})
