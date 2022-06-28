import { Body, Controller, Get, Post } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor(private roleService: RolesService){}

    @Post()
    async createRole(@Body() dto : RoleDto){
        const role = await this.roleService.createRole(dto)
        return role
    }

    @Get()
    async getRole(value : string){
        const role = this.roleService.getRole(value)
        return role
    }
}
