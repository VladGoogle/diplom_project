import {
  BadRequestException,
  Injectable, NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from './users.service';
import { UserDto } from '../dtos/user.dto';
import { LoginDto } from '../dtos/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(user: LoginDto) {
    const isValidEmail = await this.userService.findUserByEmail(user.email);
    if (!isValidEmail) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    const isValidPassword = await bcrypt.compare(
      user.password,
      isValidEmail.password,
    );
    if (!isValidPassword) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    const access_token = this.jwtService.signAsync({
      email: isValidEmail.email,
      roles: isValidEmail.roles,
    });
    return { access_token };
  }

  public async signUp(user: UserDto) {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    try {
      const createdUser = await this.userService.signUp({
        ...user,
        password: hashedPassword,
      });
      createdUser.password = undefined;
      return createdUser;
    } catch (error) {
      console.log(error);
    }
  }
}
