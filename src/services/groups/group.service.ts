import { CreateGroup, ResultGroup, UpdateGroup } from './dto';
import {
  updateAttr as updatePage,
  getPagesNotOwnerByIdGroup,
} from '../pages/page.service';
import { getById as getByIdOwner } from '../users/user.service';
import * as dal from './dal';
import Group from '../../models/group';
import { NotFoundException } from '../../Exceptions/NotFoundException';

export const getById = async (id: number): Promise<ResultGroup> => {
  const group = await dal.getById(id);
  if (!group) throw new NotFoundException(`Group with id ${id}`);
  return group;
};

export const create = async (groupInput: CreateGroup): Promise<Group> => {
  const user = await getByIdOwner(groupInput.ownerId);

  if (!user) throw new NotFoundException('User');

  const group = await dal.create(groupInput);

  if (groupInput.pagesId.length === 0) return group;
  //TODO refactor
  for (const id of groupInput.pagesId) {
    await updatePage(id, { ownerIdGroup: group.id });
  }

  return group;
};

export const patch = async (
  id: number,
  groupInput: UpdateGroup
): Promise<Group> => {
  if (groupInput.pagesId) {
    const pages = await getPagesNotOwnerByIdGroup(groupInput.pagesId, id);

    for (const page of pages) {
      await updatePage(page.id, { ownerIdGroup: id });
    }

    return dal.patch(id, { name: groupInput.name });
  }
  return dal.patch(id, groupInput);
};

export const remove = (id: number): Promise<void> => {
  return dal.remove(id);
};
