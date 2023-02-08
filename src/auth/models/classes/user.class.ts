import { RoleUserMethod } from './roleUserMethod.class';
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  IsBoolean,
  IsArray,
  ValidateNested,
  IsUUID,
} from 'class-validator';

export class UserModel {
  @IsString()
  @IsUUID()
  id: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(50)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'The password must have a Uppercase, lowercase letter and a number',
  })
  password: string;

  @IsString()
  @MinLength(1)
  fullname: string;

  @IsBoolean()
  isActive: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  roles: RoleUserMethod[];
}
