import { QueryTypes } from 'sequelize/dist';
import sequelizeConnection from '../db/db.config';
import User from '../models/user';

export const initialUser = [
  {
    firstName: 'jose',
    lastName: 'jimenez',
    email: 'jose@correo.com',
    password: '12345',
  },
  {
    firstName: 'ale',
    lastName: 'fernandez',
    email: 'ale@correo.com',
    password: '12345',
  },
];

export const createMockUsers = async () => {
  for (const user of initialUser) {
    const userCreated = User.build(user);
    await userCreated.save();
  }
};

export const deleteAllRows = async () => {
  return sequelizeConnection.query('DELETE FROM "Users"', {
    type: QueryTypes.DELETE,
  });
};
