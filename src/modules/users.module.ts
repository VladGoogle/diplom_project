import { Module } from '@nestjs/common';
import { UserService } from '../services/users.service';
import { PrismaModule } from './prisma.module';
import { UserQueries } from '../queries/user.queries';

@Module({
  imports: [PrismaModule],
  providers: [UserService, UserQueries],
  exports: [UserService]
})
export class UsersModule {}
