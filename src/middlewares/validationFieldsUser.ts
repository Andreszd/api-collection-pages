import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from '../Exceptions/BaseError';

export const validationFieldsUserRegister = (
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

export const validationFieldsUserSignIN = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
    if (!password || !email) {
      throw new BaseError(
        HttpStatusCode.BAD_REQUEST,
        'All fields must be complete'
      );
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
};
