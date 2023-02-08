import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from '@Service/Auth/index';
import { CreateUserDto } from '@Dto/Auh/index';

@Controller('/user')
export class AuthController {
  constructor(private userService: AuthService) {}

  @Post('/singup')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
