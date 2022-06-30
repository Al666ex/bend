import { BelongsToMany, Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Post } from "src/posts/post.module";
import { Role } from "src/roles/role.module";
import { UsersRoles } from "src/roles/users-roles.model";

interface AtrrUser{
    email : string,
    password : string
}

@Table({tableName : 'users'})
export class User extends Model<User, AtrrUser>{
    @Column({type : DataType.INTEGER, unique : true, autoIncrement : true, primaryKey : true})
    id:number;

    @Column({type : DataType.STRING, unique : true, allowNull : false})
    email : string;

    @Column({type : DataType.STRING, allowNull : false})
    password : string;

    @Column({type : DataType.BOOLEAN, defaultValue : false})
    banned : boolean;

    @Column({type : DataType.STRING, allowNull : true})
    bannReason : string;

    @BelongsToMany(() => Role, () => UsersRoles)
    roles : Role[]

    @HasMany(() => Post)
    posts : Post[]

    
}