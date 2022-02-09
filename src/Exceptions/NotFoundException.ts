import { HttpStatusCode } from 'src/enums/HttpStatusCode';
import { BaseError } from './BaseError';
export class NotFoundException extends BaseError {
  propertyName: string;

  constructor(propertyName: string) {
    super(HttpStatusCode.NOT_FOUND, `Property '${propertyName}' not found.`);

    this.propertyName = propertyName;
  }
}
