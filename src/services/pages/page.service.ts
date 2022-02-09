import Page from '../../models/page';
import { PageDto } from './dto';
import { getById as getByIdUser } from '../users/user.service';
import * as dal from './dal';
import { NotFoundException } from 'src/Exceptions/NotFoundException';

export const create = async (pageDto: PageDto): Promise<Page> => {
  const existUser = getByIdUser(pageDto.ownerIdUser);
  if (!existUser) throw new NotFoundException('User');
  const page = dal.create(pageDto);
  return page;
};

export const getAll = async () => {};

export const getById = async () => {};

export const update = () => {};

export const remove = () => {};
