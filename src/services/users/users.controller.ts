import { UserDto } from '../auth/dto';
import { toUserDto } from '../auth/mapper';
import * as service from './user.service';

export const create = async (user: UserDto): Promise<UserDto> => {
  const createdUser = await service.create(user);
  return toUserDto(createdUser);
};

export const getAll = async () => {
  return await service.getAll();
};

export const getById = async (id: number): Promise<UserDto> => {
  const user = await service.getById(id);
  return toUserDto(user);
};

export const update = () => {};
export const remove = () => {};
