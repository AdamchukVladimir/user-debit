import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { PaymentHistoryService} from '../payment-history/payment-history.service'

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User)
        private userModel: typeof User,
        private paymentHistoryService: PaymentHistoryService
    ){}

    async updateBalance(id: number, newBalance: number): Promise<void> {

        const user = await this.userModel.findByPk(id);
        
        if (user) {
            user.balance = newBalance;
            await user.save();
        } else {
            throw new Error('User not found');
        }
    }

    // Проверка и запись в сторию платежей + обновление баланса
    async debitBalance(userId: number, amount: number): Promise<void> {

        const paymentHistory = await this.paymentHistoryService.getUserPaymentHistory(userId);
    

        const currentBalance = paymentHistory.reduce((acc, entry) => {
          if (entry.action === 'debit') {
            return acc - entry.amount;
          }
          return acc;
        }, 0);
    

        if (currentBalance < amount) {
          throw new Error('Insufficient funds');
        }
    
        const newBalance = currentBalance - amount;
        await this.updateBalance(userId, newBalance);
    

        await this.paymentHistoryService.createPaymentHistory(userId, 'debit', amount);
      }
}