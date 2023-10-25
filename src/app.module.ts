import { Global, Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [UsersModule, PostsModule],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
