import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../enums/HttpStatusCode';
import { updateProfile } from '../users/user.service';
import { getImageByFileName } from '../images/images.service';

export const upload = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;

    const filename = req.file?.filename ? req.file.filename : '';

    const user = await updateProfile(parseInt(userId), filename);

    return res.status(HttpStatusCode.OK).json({
      response: 'successfully',
      data: { filename: user.urlImg },
    });
  } catch (error) {
    return next(error);
  }
};

export const getByFileName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { filename } = req.params;
    const img = getImageByFileName(filename);
    return res.sendFile(img);
  } catch (error) {
    return next(error);
  }
};
