import Page from '../../models/page';

export type CreateGroup = {
  ownerId: number;
  name?: string;
  pagesId: number[];
};

export type UpdateGroup = {
  name?: string;
  pagesId?: number[];
};

export type ResultGroup = {
  ownerId: number;
  name: string;
  pages?: Page[];
};
