import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get('/:value')    
    async getByValue(@Param('value') value : string){
        const role = this.roleService.getRoleByValue(value)
        return role
    }
}


