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
            const role = await this.roleService.getRoleByValue('BLOGGER')
            //const role = await this.roleService.getRoleByValue('ADMIN')                                     
            await user.$set('roles', [role.id])
            user.roles = [role]
            return user
                
        } catch (error) {
            throw new HttpException('Ошибка создания пользователя ', HttpStatus.BAD_REQUEST)            
        }
    }

    async getAllUsers(){
        //const users = await this.userModel.findAll({include : {all : true}})
        const users = await this.userModel.findAll({include : {all : true}})
        return users
    }

    async getUserByEmail(email : string){
        const user = await this.userModel.findOne({where : {email}, include : {all : true}})
        return user
    }

    
}
