import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AtrrPost{
    title : string
    content : string
    image : string   
}

@Table({tableName : 'posts'})
export class Post extends Model<Post,AtrrPost>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    id : number;

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    title : string;

    @Column({type : DataType.STRING, allowNull : false})
    content : string;

    @Column({type : DataType.STRING, allowNull : false})
    image : string;

    @Column({type : DataType.STRING, validate:{isIn : [['public', 'hidden']]} , defaultValue : 'public'})
    status : string;


}