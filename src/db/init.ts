import User from '../models/user';
import sequelizeConnection from '../config/db';
import Page from '../models/page';
import Group from '../models/group';

export async function testConnection(): Promise<void> {
  try {
    await sequelizeConnection.authenticate();
    console.log('connection to db succesfully');
  } catch (error) {
    console.error('Unable to connect to the database', error);
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
