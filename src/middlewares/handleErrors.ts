import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../enums/HttpStatusCode';

export const handleErrors = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err?.statusCode || HttpStatusCode.INTERNAL_SERVER_ERROR;
  res.status(statusCode).json({
    response: 'Error',
    error: {
      path: req.path,
      statusCode,
      message: err?.message,
    },
  });

  next(err);
};
