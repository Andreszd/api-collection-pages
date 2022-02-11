import { NextFunction, Request, Response } from 'express';
import { HttpStatusCode } from '../../enums/HttpStatusCode';
import { UserDto } from '../auth/dto';
import { toUserDto } from '../auth/mapper';
import * as service from './user.service';

/*
export const create = async (user: UserDto): Promise<UserDto> => {
  const createdUser = await service.create(user);
  return toUserDto(createdUser);
};
*/

export const getAll = async (req: Request, res: Response) => {
  const users = await service.getAll();
  return res.status(HttpStatusCode.OK).send(users);
};

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const user = await service.getAllById(parseInt(id));
    return res.status(HttpStatusCode.OK).json(user);
  } catch (error) {
    next(error);
  }
};

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.body;
  try {
    const userCreated = await service.create(toUserDto(user));
    return res.status(HttpStatusCode.CREATED).json({
      response: 'successfull',
      data: userCreated,
    });
  } catch (error) {
    return next(error);
  }
};
