import { testConnection } from '../db/init';

describe('testing server mount', () => {
  it('create user', async () => {
    const mssg = await testConnection();
    expect(mssg).toBe('Unable to connect to the database');
  });
});
