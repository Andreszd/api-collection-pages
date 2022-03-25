import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../enums/HttpStatusCode';

export const upload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.file);

    return res.status(HttpStatusCode.CREATED).json({
      response: 'successfull',
    });
  } catch (error) {}
};
