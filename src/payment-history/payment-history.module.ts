import { Module } from '@nestjs/common';
import { PaymentHistoryController } from './payment-history.controller';
import { PaymentHistoryService } from './payment-history.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { PaymentHistory } from './payment-history.model';

@Module({
  controllers: [PaymentHistoryController],
  providers: [PaymentHistoryService],
  imports: [
    SequelizeModule.forFeature([PaymentHistory]), 
  ],
})
export class PaymentHistoryModule {}
