// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { PrismaService } from './prisma.service';
// import { UserDto } from '../dtos/user.dto';
// import { UpdateUserDto } from '../dtos/updateUser.dto';
// import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
// import { UserQueries } from "../queries/user.queries";
//
// @Injectable()
// export class UserService {
//   constructor(
//     private prisma: PrismaService,
//     private userQueries: UserQueries,
//   ) {}
//
//   async signUp(data: UserDto) {
//     return await this.userQueries.signUp(data)
//   }
//
//   async findUserById(id: number) {
//     return await this.userQueries.findUserById(id)
//   }
//
//   async findUserByEmail(email: string) {
//     return await this.userQueries.findUserByEmail(email)
//   }
//
//   async findAllUsers() {
//     return await this.userQueries.findAllUsers()
//   }
//
//   async removeUserById(id: number) {
//     return await this.userQueries.removeUserById(id)
//   }
//
//   async removeUserByEmail(email: string) {
//     return await this.userQueries.removeUserByEmail(email)
//   }
//
//   async updateUserInfo(data: UpdateUserDto, id: number) {
//     return await this.userQueries.updateUserInfo(data, id)
//   }
//
//   // async changeUserPassword(data: newPasswordDto, id: number) {
//   //   const user = await this.prisma.user.findUnique({
//   //     where: { id: id },
//   //   });
//   //   await this.errorHandler.NotFoundError(user);
//   //
//   //   const isValid = await bcrypt.compare(data.oldPassword, user.password);
//   //
//   //   if (!isValid) {
//   //     throw new BadRequestException(`Invalid old password!`);
//   //   }
//   //
//   //   if (data.newPassword != data.repeatPassword) {
//   //     throw new BadRequestException(`Passwords should be matched`);
//   //   }
//   //
//   //   if (data.repeatPassword != data.newPassword) {
//   //     throw new BadRequestException(`Passwords should be matched`);
//   //   }
//   //
//   //   return await this.prisma.user.update({
//   //     where: { id: id },
//   //     data: {
//   //       password: await bcrypt.hash(data.newPassword, 10),
//   //     },
//   //   });
//   // }
//
//   async changeUserRole(data: ChangeUserRoleDto, email: string) {
//     return await this.userQueries.changeUserRole(data, email)
//   }
//
// }
