import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
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
    SequelizeModule.forFeature([User, Role, UsersRoles]),
    RolesModule    
  ],
  exports: [UsersService]

})
export class UsersModule {}
