import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from '../Exceptions/BaseError';

export const validationFieldsUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, firstName, lastName, password } = req.body;
  const fields = [email, firstName, lastName, password];
  const hasAllFieldsCompleted = fields.every(
    (value) => value !== undefined && value !== null
  );

  if (hasAllFieldsCompleted) return next();

  let message = '';

  message = 'all fields must be completed';
  return next(new BaseError(HttpStatusCode.INTERNAL_SERVER_ERROR, message));
};
