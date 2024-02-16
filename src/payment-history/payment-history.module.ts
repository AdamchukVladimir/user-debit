import { Module } from '@nestjs/common';
import { PaymentHistoryService } from './payment-history.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentHistory } from './payment-history.model';

@Module({
  controllers: [],
  providers: [PaymentHistoryService],
  imports: [
    SequelizeModule.forFeature([PaymentHistory]), 
  ],
})
export class PaymentHistoryModule {}
