import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/auth/roles.decorator';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService : PostsService){}

    @Roles('ADMIN','BLOGGER')
    @UseGuards(AuthGuard)
    @Post()
    async post(@Body() dto : PostDto){
         const post = await this.postService.post(dto)
         return post
    }
}
