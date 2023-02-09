import {
  IsNotEmpty,
  IsEmail,
  IsEnum,
  IsString,
  Matches,
  IsMobilePhone,
  MinLength,
  MaxLength,
} from 'class-validator';

import { Role } from '../enums/role.enum';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/)
  @MinLength(6)
  @MaxLength(20)
  password: string;

  @IsMobilePhone('uk-UA')
  phone: string;
}
