import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { UserDto } from './dto/user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel : typeof User,
                                   private roleService : RolesService){}
    async createUser(dto : UserDto){
        try {
            const user = await this.userModel.create(dto)
            const role = await this.roleService.getRole('BLOGGER')                           
            await user.$set('roles', [role.id])
            user.roles = [role]
            return user
                
        } catch (error) {
            throw new HttpException('Ошибка создания пользователя ', HttpStatus.BAD_REQUEST)            
        }
    }
}
