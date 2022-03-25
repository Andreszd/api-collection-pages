import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from '../Exceptions/BaseError';
import { tokenDecode } from '../helpers/decodedTokenAuth';

export const authorizer = (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers['authorization'];

  try {
    const hasAuthHeader =
      authorization && authorization.toLowerCase().startsWith('bearer');

    if (!hasAuthHeader)
      throw new BaseError(HttpStatusCode.UNAUTHORIZED, 'missing token');

    const [_, token] = authorization.split(' ');

    console.log(token);
    if (!token) {
      throw new BaseError(HttpStatusCode.UNAUTHORIZED, 'missing token');
    }

    const decodedToken = tokenDecode(token);

    if (!decodedToken)
      throw new BaseError(HttpStatusCode.UNAUTHORIZED, 'invalid token');

    console.log(decodedToken);

    next();
  } catch (error) {
    next(error);
  }
};
