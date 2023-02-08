import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';

import { CreateUserDto } from '@Dto/Auh/index';
import { PostRequest } from '@Class/Auth/index';
import { CreateUserCommand } from '@Command/Auth/index';

import { OK_SUCCESS_OPERATION } from '../utils/constants/constants';
import { DataBaseError } from '../exceptions';

@Injectable()
export class AuthService {
  constructor(private commandBus: CommandBus) {}

  async create(createUserDto: CreateUserDto): Promise<PostRequest> {
    try {
      console.log(createUserDto.password);
      const newUser = await this.commandBus.execute(
        new CreateUserCommand(createUserDto),
      );
      return { message: OK_SUCCESS_OPERATION, data: newUser };
    } catch (error) {
      console.log(error);
      throw new DataBaseError(error.message);
    }
  }
}
