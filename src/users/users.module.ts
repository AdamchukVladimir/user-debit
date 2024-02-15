import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './users.model';
import { PaymentHistoryModule } from 'src/payment-history/payment-history.module';
import { PaymentHistoryService } from 'src/payment-history/payment-history.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, ],
  imports:[
    SequelizeModule.forFeature([User]),
    PaymentHistoryModule,
  ]
})
export class UsersModule {}
