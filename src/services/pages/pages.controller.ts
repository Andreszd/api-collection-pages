import { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import { HttpStatusCode } from '../../enums/HttpStatusCode';
import { BaseError } from '../../Exceptions/BaseError';
import { isValidFilterParam } from '../../helpers/isBoolean';
import { PageDto } from './dto';
import { toPageDto } from './mapper';
import * as service from './page.service';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const pageDto = toPageDto(req.body);
    const page = await service.create(pageDto);
    return res.status(HttpStatusCode.CREATED).json({
      response: 'successfull',
      data: page,
    });
  } catch (error) {
    return next(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  const pages = await service.getAll();
  return res.status(HttpStatusCode.OK).json({
    response: 'successfull',
    data: pages,
  });
};

export const getById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const page = await service.getById(parseInt(id));
  return res.status(HttpStatusCode.OK).json({
    response: 'successfull',
    data: page,
  });
};

export const getByIdOwner = async (req: Request, res: Response) => {
  const idOwner = req.params.idOwner;
  const pagesOfOwner = await service.getByIdOwner(parseInt(idOwner));
  return res.status(HttpStatusCode.OK).json({
    response: 'successfull',
    data: pagesOfOwner,
  });
};

export const getByFilter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { isFav, isChecked } = req.query;
  try {
    if (isFav && isValidFilterParam(isFav)) {
      const pages = await service.getAllByFav(!!isFav);
      return res.status(HttpStatusCode.OK).json({
        response: 'successfull',
        data: pages,
      });
    }
    if (isChecked && isValidFilterParam(isChecked)) {
      const pages = await service.getAllByFav(!!isFav);
      return res.status(HttpStatusCode.OK).json({
        response: 'successfull',
        data: pages,
      });
    }
    throw new BaseError(HttpStatusCode.NOT_FOUND, 'filter not correct');
  } catch (error) {
    return next(error);
  }
};

export const updateAttr = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    const id = req.params.id;
    const pageDto: PageDto = req.body;
    const page = await service.updateAttr(parseInt(id), pageDto);
    return res.status(HttpStatusCode.OK).json({
      response: 'successfull',
      data: page,
    });
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  const id =  req.params.id
  try {
    await service.remove(parseInt(id))   
    res.status(HttpStatusCode.OK)
  } catch (error) {
    next(error)
  }
};

