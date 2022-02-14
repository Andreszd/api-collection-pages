import sequelizeConnection from '../../db/db.config';

import request from 'supertest';
import { createMockUsers, deleteAllRows, initialUser } from '../helpers';
import { testConnection } from '../../db/init';
let server: any;

beforeEach(async () => {
  try {
    const { serverInstace } = await import('../../app');
    server = serverInstace;

    await deleteAllRows();
    await createMockUsers();
  } catch (error) {
    console.log(error);
    server?.close();
    sequelizeConnection.close();
  }
});

test(`should return ${initialUser.length} users registered`, async () => {
  const response = await request(server).get('/api/user/').expect(200);
  expect(response.body.length).toBe(initialUser.length);
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
  server?.close();
  //sequelizeConnection.close();
});
