import { Model, Table, DataType, Column, HasMany } from "sequelize-typescript";
import { PaymentHistory } from "src/payment-history/payment-history.model";



@Table( {tableName: 'users'})
export class User extends Model<User>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.FLOAT, allowNull: false, defaultValue: 0})
    balance: number;

    @HasMany(() => PaymentHistory)
    paymentHistory: PaymentHistory[];
}