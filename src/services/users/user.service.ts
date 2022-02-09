import { AttributeDuplicateError } from '../../Exceptions/AttributeDuplicated';
import { UserDto } from '../auth/dto';

import {
  create as createUser,
  getAll as getAllUsers,
  getById as getUserById,
  findBy,
} from '../users/dal';

export const create = async (user: UserDto): Promise<UserDto | null> => {
  const findedUser = await findBy(user.userName);
  if (findedUser) throw new AttributeDuplicateError('username');
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
