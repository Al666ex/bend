import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Post } from 'src/posts/post.module';
import { PostsModule } from 'src/posts/posts.module';
import { Role } from 'src/roles/role.module';
import { RolesModule } from 'src/roles/roles.module';
import { UsersRoles } from 'src/roles/users-roles.model';
import { User } from './user.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports : [
    SequelizeModule.forFeature([User, Role, UsersRoles, Post]),
    RolesModule, PostsModule    
  ],
  exports: [UsersService]

})
export class UsersModule {}
