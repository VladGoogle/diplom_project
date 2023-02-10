// import { PrismaClient } from '@prisma/client';
//
// // initialize Prisma Client
// const prisma = new PrismaClient();
//
// async function main() {
//   // create two dummy articles
//   const user = await prisma.user.upsert({
//     where: { id: 24 },
//     update: {},
//     create: {
//       firstName: 'Vlad',
//       lastName: 'Google',
//       email: 'random@gmail.com',
//       password: 'Asdrtyjklmnb1@',
//       phone: '+380990109570',
//       isBanned: false,
//       roles: ['NETWORK_ADMIN'],
//     },
//   });
//   console.log(user);
// }
//
// // execute the main function
// main()
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   })
//   .finally(async () => {
//     // close Prisma Client at the end
//     await prisma.$disconnect();
//   });
