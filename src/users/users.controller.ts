import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService : UsersService){}

    @Post()
    async createUser(@Body() dto : UserDto){
        console.log(dto)
        const user = await this.userService.createUser(dto)
        return user
    }

}
