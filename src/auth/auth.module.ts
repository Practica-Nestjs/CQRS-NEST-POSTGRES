import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from '@Entities/Auth/index';
import { AuthController } from '@Controllers/Auth/index';
import { AuthService } from '@Service/Auth/index';
import { CreateUserCommand } from '@Command/Auth/index';
import { CreateUserHandler } from '@CommandHandlers/Auth/index';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, CreateUserCommand, CreateUserHandler],
  exports: [TypeOrmModule, CqrsModule, CreateUserCommand, CreateUserHandler],
})
export class AuthModule {}
