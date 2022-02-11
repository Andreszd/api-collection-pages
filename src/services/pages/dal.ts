import { Filter } from '../../enums/Filters';
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

export const findAllBy = async (param: Filter, value: any): Promise<Page[]> => {
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
  const page = await getById(id)
  if (!page) throw new NotFoundException('Page');
  return page.destroy()
};
