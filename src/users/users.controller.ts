import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
//import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add.role';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Post()
    async createUser(@Body() dto : UserDto){        
        const user = await this.userService.createUser(dto)
        return user
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Get()    
    async getAllUsers(){
        const users = await this.userService.getAllUsers()
        return users;
    }

    @Roles('ADMIN')
    @UseGuards(RolesGuard)
    @Post('/roles')
    addRoleToUser(@Body() dto : AddRoleDto){
        return this.userService.addRoleToUser(dto)
    }

    async getUserByEmail(email : string){
        const user = await this.userService.getUserByEmail(email)
        return user
    }    

}
