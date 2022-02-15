import Page from '../../models/page';
import { PageDto } from './dto';
import { getById as getByIdUser } from '../users/user.service';
import * as dal from './dal';
import { NotFoundException } from '../../Exceptions/NotFoundException';
import { Filter } from '../../enums/Filters';

export const create = async (pageDto: PageDto): Promise<Page> => {
  const existUser = await getByIdUser(pageDto.ownerIdUser);
  if (!existUser) throw new NotFoundException('User');
  const page = await dal.create(pageDto);
  return page;
};

export const getAll = (): Promise<Page[]> => {
  return dal.getAll();
};

export const getById = async (id: number): Promise<Page> => {
  const page = await dal.getById(id);
  if (!page) throw new NotFoundException('Page');
  return page;
};

export const getByIdOwner = (id: number): Promise<Page[]> => {
  return dal.findAllBy('ownerIdUser', id);
};

export const getAllByFav = (isFav: boolean): Promise<Page[]> => {
  return dal.findAllBy(Filter.FAV, isFav);
};

export const getAllByChecked = async (isChecked: boolean): Promise<Page[]> => {
  return dal.findAllBy(Filter.CHECKED, isChecked);
};

export const getAllByIds = (ids: number[]): Promise<Page[]> => {
  return dal.findAllBy('id', ids);
};

export const getAllByIdGroup = (idGroup: number): Promise<Page[]> => {
  return dal.findAllBy('ownerIdGroup', idGroup);
};

export const getPagesNotOwnerByIdGroup = (
  ids: number[],
  idOwnerGroup: number
): Promise<Page[]> => {
  return dal.filterPagesNotOwnerByIdGroup(ids, idOwnerGroup);
};

export const updateAttr = (
  id: number,
  pageDto: Partial<PageDto>
): Promise<Page> => {
  return dal.update(id, pageDto);
};

export const remove = (id: number): Promise<void> => {
  return dal.remove(id);
};
