import bcrypt from 'bcrypt';

const SALT_ROUNDS = 10;

export const encryptPasswd = (passwd: string): string => {
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  return bcrypt.hashSync(passwd, salt);
};
