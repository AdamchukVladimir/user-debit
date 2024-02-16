import { Controller, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { AmountValidationPipe } from '../pipes/amount-validation.pipe';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  @Post(':id/debit') // AmountValidationPipe - только положительные числа
  async debitBalance(@Param('id') id: number, @Body('amount', AmountValidationPipe) amount: number): Promise<void> {
    await this.usersService.debitBalance(id, amount);    
  }  
}
