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

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsMobilePhone('uk-UA')
  phone: string;
}
