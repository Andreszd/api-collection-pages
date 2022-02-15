import jwt, { JwtPayload } from 'jsonwebtoken';

export const decodedToken = (token: string): string | JwtPayload =>
  jwt.verify(token, process.env.SECRET_KEY as string);
