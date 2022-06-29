import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';
import { User } from 'src/users/user.model';
import { Post } from './post.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports : [
    SequelizeModule.forFeature([Post, User]), FilesModule 
  ],
  exports : [PostsService]

})
export class PostsModule {}
