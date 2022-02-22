import { UserDto } from './dto';

export const toUserDto = (user: any): UserDto => ({
  id: user?.id,
  email: user.email,
  fullName: user.fullName,
  password: user.password,
  urlImg: user?.urlImg,
  pages: user?.pages,
});
