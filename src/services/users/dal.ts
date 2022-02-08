import User from '../../models/user';
import { UserDto } from '../auth/dto';

// data access layer DAL

export const create = async (user: UserDto): Promise<User> => {
  const newUser = User.build(user);
  await newUser.save();
  return newUser;
};

export const getAll = async (): Promise<User[]> => {
  return User.findAll();
};

export const getById = async (id: number): Promise<User> => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('user not found');
  return user;
};

export const update = () => {};
export const remove = () => {};
