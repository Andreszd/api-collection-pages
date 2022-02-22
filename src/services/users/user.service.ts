import User from '../../models/user';
import { AttributeDuplicateError } from '../../Exceptions/AttributeDuplicated';
import { UserDto, ResponseUserDto } from '../auth/dto';

import * as dal from '../users/dal';
import { getByIdOwner } from '../pages/page.service';
import { NotFoundException } from '../../Exceptions/NotFoundException';
import { toUserDto } from '../auth/mapper';

export const create = async (
  user: UserDto
): Promise<ResponseUserDto | null> => {
  const findedUser = await dal.findBy(user.email);
  if (findedUser) throw new AttributeDuplicateError('email');
  return dal.create(user);
};

export const getAll = (): Promise<User[]> => {
  return dal.getAll();
};

export const getById = async (id: number): Promise<User> => {
  return dal.getById(id);
};

export const getAllById = async (id: number): Promise<UserDto> => {
  const [user, pages] = await Promise.all([getById(id), getByIdOwner(id)]);
  if (!user) throw new NotFoundException('User');
  const dtoUser = toUserDto(user);
  dtoUser.pages = pages;
  return dtoUser;
};

export const findBy = async (param: string): Promise<User> => {
  const user = await dal.findBy(param);
  if (!user) throw new NotFoundException(`User with ${param}`);
  return user;
};

export const update = () => {};

export const remove = () => {};
