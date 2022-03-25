import User from '../../models/user';
import { UserDto } from '../auth/dto';

// data access layer DAL

export const create = async (user: UserDto): Promise<User> => {
  const newUser = User.build(user);
  await newUser.save();
  return newUser;
};

export const findBy = async (param: string): Promise<User | null> => {
  const user = await User.findOne({
    where: {
      email: param,
    },
  });
  return user;
};

export const getAll = async (): Promise<User[]> => {
  return User.findAll();
};

export const getById = async (id: number): Promise<User> => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('user not found');
  return user;
};

export const patch = async (
  id: number,
  attr: Partial<UserDto>
): Promise<User> => {
  const user = await getById(id);
  return user.update(attr);
};

export const remove = () => {};
