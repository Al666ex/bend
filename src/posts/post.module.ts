import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { User } from "src/users/user.model";

interface AtrrPost{
    title : string,
    content : string,
    userId : number,
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

    //@Column({type : DataType.STRING, validate:{isIn : [['public', 'hidden']], msg : 'Must be public or hidden'} , defaultValue : 'public'})
    @Column({type : DataType.STRING, defaultValue : 'public'})
    status : string;

    @ForeignKey(() => User)
    @Column({type : DataType.INTEGER})
    userId : number;

    @BelongsTo(() => User)
    author : User
}