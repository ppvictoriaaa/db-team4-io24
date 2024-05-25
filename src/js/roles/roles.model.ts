import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class Role extends Model{
    @Column({unique: true, primaryKey: true, autoIncrement: true})
    id: number;

    @Column({type: DataType.STRING})
    title: string
}