import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';
import { Roles } from './roles.decorator';
import { RolesGuard } from './roles.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}
    @Post('/registration')
    async registration(@Body() dto : UserDto){    
        return await this.authService.registration(dto)
    }

    //@Roles('ADMIN')
    //@UseGuards(RolesGuard)
    @Post('/login')
    login(@Body() dto : UserDto){
        return this.authService.login(dto)
    }
}
