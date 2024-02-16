import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize'
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'
import { User } from './users/users.model';
import { PaymentHistory } from './payment-history/payment-history.model';
import { PaymentHistoryModule } from './payment-history/payment-history.module';


@Module({
  imports: [ 
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),   SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRESS_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DB,
    models: [User, PaymentHistory],
    autoLoadModels: true 
  }), UsersModule, PaymentHistoryModule,],
  controllers: [],
  providers: [],
})
export class AppModule {}
