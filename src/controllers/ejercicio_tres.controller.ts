import { Controller, Get, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { IEjercicioTres } from 'src/common/interfaces/ejercicio_tres.interface';
import { EjercicioTresDto } from 'src/dtos/Ejercicio_tres.dto';
import { EjercicioTresService } from 'src/services/ejercicio_tres.service';

@Controller('ejercicio-tres')
export class EjercicioTresController {

    constructor(private ejercicioTresService: EjercicioTresService){}

    @Get('getTheNumber')
    getTheNumber(@Query() payload: EjercicioTresDto): IEjercicioTres{
        
        const { first, second } = payload;

        return this.ejercicioTresService.getTheNumber(first, second);
  }
}
