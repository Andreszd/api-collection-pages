import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from '../Exceptions/BaseError';
import { decodedToken } from '../helpers/decodedTokenAuth';

export const authorizer = (req: Request, res: Response, next: NextFunction) => {
  let token = null;
  const authorization = req.headers['authorization'];
  console.log(authorization);
  try {
    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
      token = authorization.split(' ')[1];
    }

    if (!token)
      throw new BaseError(HttpStatusCode.UNAUTHORIZED, 'token invalid');

    console.log(token);

    const tokenDecoded = decodedToken(token);

    if (!tokenDecoded)
      throw new BaseError(HttpStatusCode.UNAUTHORIZED, 'token missing');

    next();
  } catch (error) {
    next(error);
  }
};
