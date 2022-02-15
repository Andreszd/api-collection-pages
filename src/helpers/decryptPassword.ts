import bcrypt from 'bcrypt';

export const matchPasswords = async (
  password: string,
  userPassword: string
): Promise<Boolean> => {
  const match = await bcrypt.compare(password, userPassword);
  return match;
};
