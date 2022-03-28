import { UserLogin } from './dto';

import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { HttpStatusCode } from '../../enums/HttpStatusCode';
import { BaseError } from '../../Exceptions/BaseError';
import { findBy } from '../users/user.service';
import { matchPasswords } from '../../helpers/decryptPassword';

export const signIn = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userInput: UserLogin = req.body;
  try {
    console.log(userInput);
    const { id, email, fullName, password } = await findBy(userInput.email);
    const match = await matchPasswords(userInput.password, password);

    if (!match) {
      throw new BaseError(
        HttpStatusCode.UNAUTHORIZED,
        'the passwords not matches'
      );
    }

    const userForToken = {
      id,
      email,
      fullName,
    };

    const token = jwt.sign(userForToken, process.env.SECRET_KEY as string, {
      expiresIn: 60 * 60,
    });

    res.status(200).json({
      id,
      fullName,
      email,
      token,
    });
  } catch (error) {
    next(error);
  }
};
