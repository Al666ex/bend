import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { PostDto } from './dto/post.dto';
import { Post } from './post.module';

@Injectable()
export class PostsService {
    constructor(@InjectModel(Post) private postRepository : typeof Post,
                                   private fileService : FilesService){}

    async saveFile(dto : PostDto, img : any){
        const fileName = await this.fileService.saveFile(img)
        const post = await this.postRepository.create({...dto, image : fileName})
        return post
    }

    async updatePost(dto : PostDto){
        //const post = await this.postRepository.update(dto)
    }
}
