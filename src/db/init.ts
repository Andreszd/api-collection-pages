import User from '../models/user';
import sequelizeConnection from './db.config';
import Page from '../models/page';
import Group from '../models/group';
import { Model } from 'sequelize';

const isDev = process.env.NODE_ENV === 'development';

export async function testConnection(): Promise<void> {
  try {
    await sequelizeConnection.authenticate();
    console.log('connect to db successfully');
  } catch (error: any) {
    console.error('Unable to connect to the database', error);
  }
}
export function initModels(): Promise<Model[]> {
  return Promise.all([
    Group.sync({ alter: isDev }),
    User.sync({ alter: isDev }),
    Page.sync({ alter: isDev }),
  ]);
}
