import { HttpStatusCode } from '../enums/HttpStatusCode';

export class BaseError extends Error {
  statusCode: HttpStatusCode;

  constructor(statusCode: HttpStatusCode, message: string) {
    super(message);
    this.statusCode = statusCode;
    //TODO search what to do bellow code
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = Error.name;
    this.statusCode = statusCode;
    Error.captureStackTrace(this);
  }
}
