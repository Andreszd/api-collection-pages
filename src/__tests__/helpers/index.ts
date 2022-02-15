import { Server } from 'http';
import User from '../../models/user';
import Page from '../../models/page';
import { pages, users } from './mocks';

export const getServerConnection = async (): Promise<Server> => {
  const { default: app } = await import('../../app');
  return app.getServerConnection();
};

export const mockPages = async () => {
  for (const page of pages) {
    const createPage = Page.build(page);
    await createPage.save();
  }
};

export const mockUsers = async () => {
  for (const user of users) {
    const userCreated = User.build(user);
    await userCreated.save();
  }
};

export const downServer = async (server: Server) => {
  await User.destroy({
    truncate: true,
    cascade: true,
    restartIdentity: true,
    force: true,
  });
  await server.close();
};
