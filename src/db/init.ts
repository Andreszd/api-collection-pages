import User from '../models/user';
import sequelizeConnection from './db.config';
import Page from '../models/page';
import Group from '../models/group';

export async function testConnection(): Promise<String> {
  try {
    await sequelizeConnection.authenticate();
    return 'connection to db succesfully';
  } catch (error) {
    console.error('Unable to connect to the database', error);
    return 'Unable to connect to the database';
  }
}
export function initModels(): void {
  const isDev = process.env.NODE_ENV === 'development';
  try {
    Group.sync({ alter: isDev });
    User.sync({ alter: isDev });
    Page.sync({ alter: isDev });
    console.log('models created');
  } catch (error) {
    console.log('has ocurred a exception', error);
  }
}
