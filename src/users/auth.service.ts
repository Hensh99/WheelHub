import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
// ao we can use a promise instead of callbacks
import { promisify } from 'util';

const scrypt = promisify(_scrypt);
@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signup(email: string, password: string) {
    // Check if email is already used
    const users = await this.usersService.find('email');
    if (users.length) {
      throw new BadRequestException('Email is used');
    }

    // Hash the users passwords

    // Generate a salt

    const salt = randomBytes(8).toString('hex');

    // Hash the salt and the password together

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    // Joined the hashed result and the salt together

    const passwordHash = salt + '.' + hash.toString('hex');

    // create a new user and save it
    const user = await this.usersService.create(email, passwordHash);

    // return the user
    return user;
  }

  signin() {}
}
