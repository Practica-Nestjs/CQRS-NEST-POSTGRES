import { IsEnum, IsString } from 'class-validator';
import { RoleUserType } from '../enums';

export class RoleUserMethod {
  @IsEnum(RoleUserType)
  type: RoleUserType;

  @IsString()
  fullName: string;
}
