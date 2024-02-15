import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import { User } from '../users/users.model';

@Table({ tableName: 'payment_history' })
export class PaymentHistory extends Model<PaymentHistory> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  action: string;

  @Column({ type: DataType.FLOAT, allowNull: false })
  amount: number;

  @Column({ type: DataType.DATE, allowNull: false,defaultValue: DataType.NOW })
  ts: number;
}