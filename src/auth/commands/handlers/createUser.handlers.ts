import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '@Entities/Auth/index';
import { CreateUserCommand } from '@Command/Auth/index';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  async execute(command: CreateUserCommand): Promise<User> {
    const { user } = command;
    const newUser = this.userRepository.create(user);
    await this.userRepository.save(newUser);
    // const { id, ...newUser } = await this.userRepository.save(user);
    // const newUser = await this.userRepository.save(user);

    return newUser;
  }
}
