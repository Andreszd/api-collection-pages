import { HttpStatusCode } from '../enums/HttpStatusCode';
import { BaseError } from './BaseError';

export class AttributeDuplicateError extends BaseError {
  propertyName: string;

  constructor(propertyName: string) {
    super(
      HttpStatusCode.INTERNAL_SERVER_ERROR,
      `Property ${propertyName} duplicated`
    );
    this.propertyName = propertyName;
  }
}
