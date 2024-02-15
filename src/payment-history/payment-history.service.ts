import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PaymentHistory } from './payment-history.model';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PaymentHistoryService {
    constructor(
        @InjectModel(PaymentHistory)
        private paymentHistoryModel: typeof PaymentHistory,
    ){}

    async createPaymentHistory(user_id: number, action: string, amount: number): Promise<void> {
         await this.paymentHistoryModel.create({ user_id, action, amount });
    }
    
    async getUserPaymentHistory(user_id: number): Promise<PaymentHistory[]> {
        return this.paymentHistoryModel.findAll({ where: { user_id } });
    }
}
