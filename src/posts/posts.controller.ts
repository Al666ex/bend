import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private postService : PostsService){}

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async savePost(@Body() dto : PostDto, @UploadedFile() image ){
        console.log(image)
        const post = await this.postService.saveFile(dto, image)
        return post        
    }
}
