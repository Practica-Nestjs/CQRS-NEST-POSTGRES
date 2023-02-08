import { InternalServerErrorException } from '@nestjs/common';

export class DataBaseError extends InternalServerErrorException {
  constructor(message) {
    super(message);
  }
}
