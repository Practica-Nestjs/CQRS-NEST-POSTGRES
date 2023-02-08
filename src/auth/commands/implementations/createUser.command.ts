import { CreateUserDto } from '@Dto/Auh/index';

export class CreateUserCommand {
  constructor(public user: CreateUserDto) {}
}
