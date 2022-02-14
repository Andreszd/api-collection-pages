import { testConnection } from '../db/init';

describe.skip('testing server mount', () => {
  it('create user', async () => {
    const mssg = await testConnection();
    expect(mssg).toBe('connection to db succesfully');
  });
});
