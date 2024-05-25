import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Role } from "src/roles/roles.model";

@Table
export class User extends Model{
    @Column({unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING})
    email: string;

    @Column({type: DataType.STRING})
    username: string;

    @Column({type: DataType.STRING})
    password: string;

    @Column({
        type: DataType.INTEGER,
    })
    roleId: number;
}