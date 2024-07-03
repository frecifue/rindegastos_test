import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IEjercicioUno } from 'src/common/interfaces/ejercicio_uno.interface';
import { EjercicioUnoDto } from 'src/dtos/Ejercicio_uno.dto';
import { EjercicioUnoService } from 'src/services/ejercicio_uno.service';

@Controller('ejercicio-uno')
export class EjercicioUnoController {
  constructor(private ejercicioUnoService: EjercicioUnoService) {}

  @Get('getConvertedAmount')
  @UsePipes(new ValidationPipe({ transform: true }))
  async getConvertedAmount(@Query() payload: EjercicioUnoDto,): Promise<IEjercicioUno> {
    return await this.ejercicioUnoService.convertCurrency(payload.from, payload.to, payload.amount);
  }
}
