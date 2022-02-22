import Page from '../../models/page';
import { UserAttributes } from '../../models/user';

export interface UserDto extends UserAttributes {
  pages?: Page[];
}

export type ResponseUserDto = {
  id: number;
  email: string;
  fullName: string;
};

export type UserLogin = {
  email: string;
  password: string;
};
