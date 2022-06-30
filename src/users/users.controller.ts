import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
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
    //@UseGuards(AuthGuard)   
    
    async getAllUsers(){
        const users = await this.userService.getAllUsers()
        return users;
    }

    async getUserByEmail(email : string){
        const user = await this.userService.getUserByEmail(email)
        return user
    }    

}
