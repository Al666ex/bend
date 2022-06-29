import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as path from 'path'
import * as fs from 'fs'
import {v4} from 'uuid'


@Injectable()
export class FilesService {
    async saveFile(file) : Promise<string>{
        try {
            const fileName = v4()+'.jpg'
            const filePath = path.resolve(__dirname, '..', 'static')
            if(!fs.existsSync(filePath)){
                fs.mkdirSync(filePath, {recursive : true})
            }
            fs.writeFileSync(path.join(filePath,fileName), file.buffer)
            console.log(fileName)
            console.log(filePath)
            return fileName
                
        } catch (error) {
            throw new HttpException('Ошибка записи файла ', HttpStatus.INTERNAL_SERVER_ERROR)            
        }

    }
}
