import { Injectable } from '@nestjs/common';
import { IEjercicioTres } from 'src/common/interfaces/ejercicio_tres.interface';

@Injectable()
export class EjercicioTresService {

    getTheNumber(first: number, second: number): IEjercicioTres{
        let resultado = '';

        for (let i = 1; i <= second; i++) {
            resultado += (first * i).toString();
          }

    return {
        firstValue: first,
        secondValue: second,
        result: resultado.slice(0, 9)
    } as IEjercicioTres;
    }
} 
