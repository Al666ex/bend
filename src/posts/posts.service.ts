import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostDto } from './dto/post.dto';
import { Post } from './post.module';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository : typeof Post){}

    async post(dto : PostDto){
        const addPost = await this.postRepository.create(dto)
        return addPost
    }
}
