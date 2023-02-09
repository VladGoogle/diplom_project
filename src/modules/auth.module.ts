import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '../services/auth.service';
import { UsersModule } from './users.module';
import * as dotenv from 'dotenv';
import { AuthStrategy } from '../strategies/auth.strategy';
import { AuthController } from '../controllers/auth.controller';
dotenv.config();

@Module({
  imports: [
    PassportModule,
    UsersModule,
    JwtModule.register({
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: '1800s' },
    }),
  ],
  providers: [AuthService, AuthStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
