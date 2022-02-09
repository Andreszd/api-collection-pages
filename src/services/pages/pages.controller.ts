import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from 'src/enums/HttpStatusCode';
import { toPageDto } from './mapper';
import * as service from './page.service';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageDto = toPageDto(req.body);
    const page = service.create(pageDto);
    return res.status(HttpStatusCode.CREATED).json({
      response: 'successfull',
      data: page,
    });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req: Request, res: Response) => {};

export const update = async (req: Request, res: Response) => {};

export const getAll = async (req: Request, res: Response) => {};
