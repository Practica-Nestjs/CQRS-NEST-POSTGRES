import { OmitType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

import { UserModel } from '@Class/Auth/index';
import { encryptPassword } from '@src/auth/utils/functions/index';

export class CreateUserDto extends OmitType(UserModel, [
  'id',
  'isActive',
  'roles',
]) {
  @Transform(({ value }) => encryptPassword(value))
  @IsString()
  @IsNotEmpty()
  password: string;
}
