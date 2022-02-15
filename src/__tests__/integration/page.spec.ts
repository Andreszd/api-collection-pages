import { Server } from 'http';
import {
  downServer,
  getServerConnection,
  mockPages,
  mockUsers,
} from '../helpers/index';
import sequelizeConnection from '../../db/db.config';

import request from 'supertest';

describe('endpoints page', () => {
  let server: Server;

  beforeEach(async () => {
    server = await getServerConnection();

    await mockUsers();
    await mockPages();
  });

  afterEach(async () => {
    await downServer(server);
    sequelizeConnection.close();
  });

  test('should create page successfully', async () => {
    const page = {
      ownerIdUser: 1,
      url: 'https://jestjs.io/docs/27.0/',
      title: 'hello',
    };
    await request(server).post('/api/page').send(page).expect(201);
  });
});
