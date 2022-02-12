import { QueryTypes } from 'sequelize';
import sequelizeConnection from '../../db/db.config';
import { NotFoundException } from '../../Exceptions/NotFoundException';
import Page, { PageAttributes } from '../../models/page';
import { PageDto } from '../pages/dto';

// data access layer DAL

export const create = async (pageDto: PageDto): Promise<Page> => {
  const page = Page.build(pageDto);
  await page.save();
  return page;
};

export const findBy = async (
  param: string,
  value: string | number
): Promise<Page | null> => {
  const page = await Page.findOne({
    where: { [param]: value },
  });
  return page;
};
export const findAllBy = async (param: string, value: any): Promise<Page[]> => {
  const pages = await Page.findAll({ where: { [param]: value } });
  return pages;
};

export const getAll = async (): Promise<Page[]> => {
  return Page.findAll();
};

export const getById = async (id: number): Promise<Page | null> => {
  return Page.findByPk(id);
};

export const update = async (
  id: number,
  attr: Partial<PageAttributes>
): Promise<Page> => {
  const page = await getById(id);
  if (!page) throw new NotFoundException('Page');
  return page.update(attr);
};

export const remove = async (id: number): Promise<void> => {
  const page = await getById(id);
  if (!page) throw new NotFoundException('Page');
  return page.destroy();
};

export const filterPagesNotOwnerByIdGroup = async (
  idsPage: number[],
  id: number
): Promise<Page[]> => {
  return sequelizeConnection.query(
    'SELECT "Pages".* FROM "Pages","Groups" WHERE "Pages".id IN(:ids) AND "Pages"."ownerIdGroup" != :id GROUP BY "Pages".id',
    {
      replacements: { id, ids: idsPage },
      type: QueryTypes.SELECT,
    }
  );
};
