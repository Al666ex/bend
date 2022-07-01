import { Body, Controller, Get, Post, Put, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService : PostsService){}

    @Roles('ADMIN','BLOGGER')
    @UseGuards(RolesGuard)         
    @Post('/add')
    @UseInterceptors(FileInterceptor('image'))
    async savePost(@Body() dto : PostDto, @UploadedFile() image ){        
        const post = await this.postService.saveFile(dto, image)
        return post        
    }

    // @Put('/update')
    // @UseInterceptors(FileInterceptor('image'))
    // async updatePost(@Body() dto : PostDto, @UploadedFile() image){
    //     const post = await this.postService.updatePost(dto, image)
    // }
}
