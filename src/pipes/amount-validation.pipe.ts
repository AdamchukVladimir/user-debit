import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';


@Injectable()
export class AmountValidationPipe implements PipeTransform {
  transform(value: any) {
    const amount = parseFloat(value);
    if (isNaN(amount) || amount <= 0) {
      throw new BadRequestException('Eror. Amount must be a positive number.');
    }
    return amount;
  }
}