import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IEjercicioDos } from 'src/common/interfaces/ejercicio_dos.interface';
import { EjercicioDosDto } from 'src/dtos/Ejercicio_dos.dto';
import { EjercicioDosService } from 'src/services/ejercicio_dos.service';

@Controller('ejercicio-dos')
export class EjercicioDosController {
  constructor(private ejercicioDosService: EjercicioDosService) {}

  @Get('getDaysUntilMyBirthday')
  @UsePipes(new ValidationPipe({ transform: true }))
  getDaysUntilMyBirthday(@Query() query: EjercicioDosDto): IEjercicioDos {
    return this.ejercicioDosService.getDaysUntilMyBirthday(query.birthdate);
    

  }
}
