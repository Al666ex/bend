import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { Role } from "./roles/role.module";
import { RolesModule } from "./roles/roles.module";
import { UsersRoles } from "./roles/users-roles.model";
import { User } from "./users/user.model";
import { UsersModule } from "./users/users.module";

@Module({
    controllers : [], 
    providers : [],
    imports: [
        ConfigModule.forRoot({
          envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.HOST,
          port: Number(process.env.DB_PORT),
          username: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_NAME,
          models: [User, Role, UsersRoles],
          autoLoadModels : true
        }),
        UsersModule, RolesModule
      ],
    
})

export class AppModule{}