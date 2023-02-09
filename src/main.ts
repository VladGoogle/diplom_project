import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import { AppModule } from './modules/app.module';
import { PrismaService } from './services/prisma.service';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  await app.listen(process.env.SERVER_PORT);
  console.log(`Server is listening on port ${process.env.SERVER_PORT}`);
}
bootstrap();
