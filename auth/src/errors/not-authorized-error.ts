import { CustomError } from './custom-error';

export class NotAuthenticatedError extends CustomError {
  statusCode = 401;

  constructor() {
    super('Not authorized');

    Object.setPrototypeOf(this, NotAuthenticatedError.prototype)
  }

  serializeErrors() {
    return [{ message: 'Not authorized' }];
  }
}
