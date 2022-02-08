import { UserDto } from './dto';

export const toUserDto = (user: any): UserDto => ({
  id: user?.id,
  userName: user.userName,
  firstName: user.firstName,
  lastName: user.lastName,
  password: user.password,
  urlImg: user?.urlImg,
});
