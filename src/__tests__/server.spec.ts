import { testConnection } from '../db/init';

describe.skip('testing server mount', () => {
  it('should connect db successfully', async () => {
    const mssg = await testConnection();
    expect(mssg).toBe('connection to db succesfully');
  });
});
