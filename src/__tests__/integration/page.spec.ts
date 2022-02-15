import { Server } from 'http';
import {
  downServer,
  getServerConnection,
  mockPages,
  mockUsers,
} from '../helpers/index';
import sequelizeConnection from '../../db/db.config';

import request from 'supertest';
import { pages } from '../helpers/mocks';

describe('endpoints page', () => {
  let server: Server;

  beforeEach(async () => {
    try {
      server = await getServerConnection();

      await mockUsers();
      await mockPages();
    } catch (error) {
      console.log(error);
    }
  });

  afterEach(async () => {
    await downServer(server);
  });

  afterAll(async () => {
    await sequelizeConnection.close();
  });

  test('should create page successfully', async () => {
    const page = {
      ownerIdUser: 1,
      url: 'https://jestjs.io/docs/27.0/',
      title: 'hello',
    };
    await request(server).post('/api/page').send(page).expect(201);
    const { body } = await request(server).get('/api/page').expect(200);
    expect(body.data).toHaveLength(pages.length + 1);
  });

  test('should return error when send empty obj', async () => {
    const page = {};

    await request(server).post('/api/page').send(page).expect(500);
  });

  test('should return 200 status code when request one page', async () => {
    await request(server).get('/api/page/1').expect(200);
  });

  test('should update attribute when request it', async () => {
    const page = { isFav: true, isChecked: true };
    await request(server).patch('/api/page/1').send(page).expect(200);
    const { body } = await request(server).get('/api/page/1').expect(200);
    expect(body.data.isFav).toEqual(page.isFav);
    expect(body.data.isChecked).toEqual(page.isChecked);
  });

  test('should page remove successfully when request it', async () => {
    await request(server).delete('/api/page/1').expect(200);
    const { body } = await request(server).get('/api/page').expect(200);
    expect(body.data).toHaveLength(pages.length - 1);
  });
});
