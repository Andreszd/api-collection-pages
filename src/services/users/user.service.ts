import { UserDto } from '../auth/dto';

import {
  create as createUser,
  getAll as getAllUsers,
  getById as getUserById,
} from '../users/dal';

export const create = async (user: UserDto): Promise<UserDto> => {
  const createdUser = await createUser(user);
  return createdUser;
};

export const getAll = async () => {
  return await getAllUsers();
};

export const getById = async (id: number) => {
  return await getUserById(id);
};
export const update = () => {};
export const remove = () => {};
