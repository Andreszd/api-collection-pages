import { PageDto } from './dto';

export const toPageDto = (page: any): PageDto => ({
  id: page?.id,
  ownerIdUser: page?.ownerIdUser,
  url: page?.url,
  isFav: page?.isFav,
  isChecked: page?.isChecked,
  title: page?.title,
  description: page?.description,
});
