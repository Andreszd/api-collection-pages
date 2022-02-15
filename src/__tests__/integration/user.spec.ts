import request from 'supertest';
import sequelizeConnection from '../../db/db.config';

import { Server } from 'http';
import { downServer, getServerConnection, mockUsers } from '../helpers/index';
import { users } from '../helpers/mocks';

describe.skip('endpoints user', () => {
  let server: Server;

  beforeEach(async () => {
    server = await getServerConnection();
    await mockUsers();
  });

  test(`should return ${users.length} users registered`, async () => {
    const response = await request(server).get('/api/user/').expect(200);
    expect(response.body.length).toBe(users.length);
  });

  test('should return email dupliacted', async () => {
    const testUser = {
      firstName: 'jose',
      lastName: 'jimenez',
      email: 'jose@correo.com',
      password: '12345',
    };

    const response = await request(server)
      .post('/api/auth/signUp')
      .send(testUser)
      .expect(500);

    expect(response.body?.error?.message).toBe('Property email duplicated');
  });

  test('should showing all fiels are require', async () => {
    const testUser = {
      firstName: 'jose',
      password: '12345',
    };

    const response = await request(server)
      .post('/api/auth/signUp')
      .send(testUser)
      .expect(500);

    expect(response.body?.error?.message).toBe('all fields must be completed');
  });

  test('should showing all fiels are require when send empty object', async () => {
    const testUser = {};

    const response = await request(server)
      .post('/api/auth/signUp')
      .send(testUser)
      .expect(500);

    expect(response.body?.error?.message).toBe('all fields must be completed');
  });

  afterEach(async () => {
    await downServer(server);
    sequelizeConnection.close();
  });
});
