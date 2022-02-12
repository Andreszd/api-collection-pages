import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from './BaseError';
export class NotFoundException extends BaseError {
  propertyName: string;

  constructor(propertyName: string) {
    super(HttpStatusCode.NOT_FOUND, `'${propertyName}' Not found.`);

    this.propertyName = propertyName;
  }
}
