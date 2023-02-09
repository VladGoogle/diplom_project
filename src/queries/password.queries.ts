// import {
//   BadRequestException,
//   Injectable,
//   NotFoundException,
// } from '@nestjs/common';
// import { PrismaService } from '../services/prisma.service';
// import { UserDto } from '../dtos/user.dto';
// import { UpdateUserDto } from '../dtos/updateUser.dto';
// import { ChangeUserRoleDto } from '../dtos/changeUserRole.dto';
//
// @Injectable()
// export class PasswordQueries {
//   constructor(private prisma: PrismaService) {}
//
//   async sendRestore (data: UserDto) {
//     try {
//       return await this.prisma.password.create({
//         data: {
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           password: data.password,
//           phone: data.phone
//         },
//       });
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async findUserById(id: number) {
//     try {
//       const user = await this.prisma.user.findUniqueOrThrow({
//         where: { id: id },
//       });
//       return user;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async findUserByEmail(email: string) {
//     try {
//       const user = await this.prisma.user.findUniqueOrThrow({
//         where: {
//           email: email,
//         },
//       });
//       return user;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async findAllUsers() {
//     try {
//       const users = await this.prisma.user.findMany();
//       if (!users.length) {
//         return new NotFoundException('No users was found');
//       }
//       return users;
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async removeUserById(id: number) {
//     try {
//       const user = await this.prisma.user.delete({
//         where: { id: id },
//       });
//       return { message: `User with id: ${user.id} has been deleted` };
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async removeUserByEmail(email: string) {
//     try {
//       const user = await this.prisma.user.delete({
//         where: { email: email },
//       });
//       return { message: `User with email: ${user.email} has been deleted` };
//     } catch (e) {
//       console.log(e);
//     }
//   }
//
//   async updateUserInfo(data: UpdateUserDto, id: number) {
//     try {
//       const user = await this.prisma.user.update({
//         where: { id: id },
//         data: {
//           firstName: data.firstName,
//           lastName: data.lastName,
//           email: data.email,
//           phone: data.phone,
//         },
//       });
//       return user;
//     } catch (e) {
//       console.log(e);
//     }
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
//     try {
//       const user = await this.prisma.user.update({
//         where: { email: email },
//         data: {
//           roles: data.role,
//         },
//       });
//       return user;
//     } catch (e) {
//       console.log(e)
//     }
//   }
//
// }
