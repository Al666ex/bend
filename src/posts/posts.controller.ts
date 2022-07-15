import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { emitWarning } from 'process';
import { IsEmail } from 'sequelize-typescript';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { PostDto } from './dto/post.dto';
import { PosUpdateDto } from './dto/post.update.dto';
import { PostUpdateStatusDto } from './dto/post.update.status.dto';
import { PostsService } from './posts.service';


@ApiTags('Posts')
@Controller('posts')
export class PostsController {
    constructor(private postService : PostsService){}

    // @Roles('ADMIN','BLOGGER')
    // @UseGuards(AuthGuard)
    @ApiOperation({summary : 'Создание роли'})

    @Roles('ADMIN', 'BLOGGER')
    @UseGuards(RolesGuard)    
    @Post()
    async post(@Body() dto : PostDto){
         const post = await this.postService.post(dto)
         return post
    }
    
    @Put('/:email/:idPost')
    async update(@Param('email') email : string, @Param('idPost') idPost : string, @Body() dto : PosUpdateDto){
        const update = await this.postService.update(email ,idPost, dto)
        return update;
    }

    @Put('/status/:email/:idPost')
    async updateStatus(@Param('email') email : string, @Param('idPost') idPost : string, @Body() dto : PostUpdateStatusDto){
        const updateStat = await this.postService.updateStatus(email ,idPost, dto)
        return updateStat;
    }

    @Delete('/:email/:idPost')
    async delete(@Param('email') email : string, @Param('idPost') idPost : string){
        const deletePost = await this.postService.delete(email ,idPost)
        return deletePost
    }

    @Get()
    allPublicPost(){
        return this.postService.publicPosts()        
    }

    @Get('/:email')
    postsOwner(@Param('email') email : string){
        return this.postService.postsOwner(email)
    }
}
