import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../../enums/HttpStatusCode';
import { CreateGroup, UpdateGroup } from './dto';
import * as service from './group.service';

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    const group = await service.getById(parseInt(id));
    return res.status(HttpStatusCode.OK).json({
      response: 'successfull',
      data: group,
    });
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const groupInput: CreateGroup = req.body;
  try {
    const group = await service.create(groupInput);
    return res.status(HttpStatusCode.CREATED).json({
      response: 'successfull',
      data: group,
    });
  } catch (error) {
    return next(error);
  }
};

export const patch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  const groupInput: UpdateGroup = req.body;
  try {
    const group = await service.patch(parseInt(id), groupInput);
    return res.status(HttpStatusCode.OK).json({
      response: 'successfull',
      data: group,
    });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.params.id;
  try {
    await service.remove(parseInt(id));
  } catch (error) {
    next(error);
  }
};
