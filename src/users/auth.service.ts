import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private UsersService: UsersService) {}

  async signup(email: string, password: string) {
    // Check if email is already used
    const users = await this.UsersService.find('email');
    if (users.length) {
      throw new BadRequestException('Email is used');
    }

    // Hash the users passwords

    // create a new user and save it

    // return the user
  }

  signin() {}
}
