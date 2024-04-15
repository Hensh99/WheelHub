import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from './auth.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // WHAT CREATE THE REPOSITORY FOR US
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule {}
