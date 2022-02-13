import { NotFoundException } from '../../Exceptions/NotFoundException';
import Group, { GroupCreationAttr } from '../../models/group';

export const create = (groupAttr: GroupCreationAttr): Promise<Group> => {
  const group = Group.build(groupAttr);
  return group.save();
};

export const getById = (id: number): Promise<Group | null> => {
  return Group.findByPk(id, { include: [Group.associations.pages] });
};

export const patch = async (
  id: number,
  groupInput: Partial<Group>
): Promise<Group> => {
  const group = await getById(id);
  if (!group) throw new NotFoundException(`Group with id : ${id}`);
  if (groupInput.pages) {
    group.pages?.push(groupInput.pages[0]);
    return group.save();
  }
  return group.update(groupInput);
};

export const remove = async (id: number): Promise<void> => {
  const group = await getById(id);
  if (!group) throw new NotFoundException(`Group with id : ${id}`);
  return group?.destroy();
};
