import { forwardRef, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { User } from 'src/users/user.model';
import { UsersModule } from 'src/users/users.module';
import { Post } from './post.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports : [
    SequelizeModule.forFeature([Post, User]), FilesModule, forwardRef(() => UsersModule) 
  ],
  exports : [PostsService]

})
export class PostsModule {}
