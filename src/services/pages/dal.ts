import Page from '../../models/page';
import { PageDto } from '../pages/dto';

// data access layer DAL

export const create = async (pageDto: PageDto): Promise<Page> => {
  const page = Page.build(pageDto);
  await page.save();
  return page;
};

export const findBy = async (param: string): Promise<Page | null> => {
  const page = await Page.findOne({
    where: { [param]: param },
  });
  return page;
};

export const getAll = async (): Promise<Page[]> => {
  return Page.findAll();
};

export const getById = async (id: number): Promise<Page> => {
  const page = await Page.findByPk(id);
  if (!page) throw new Error('page not found');
  return page;
};

export const update = () => {};
export const remove = () => {};
