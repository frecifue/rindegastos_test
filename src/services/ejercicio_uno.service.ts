import { Injectable, NotFoundException } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { IEjercicioUno } from 'src/common/interfaces/ejercicio_uno.interface';
@Injectable()
export class EjercicioUnoService {

    private readonly appId = '87efd2c39202475e99abf8f77083e7f2'; 
    private readonly apiUrl = 'https://openexchangerates.org/api/latest.json';

    async convertCurrency(from: string, to: string, amount: number): Promise<IEjercicioUno> {
        
        try {
    
            const response = await axios.get(`${this.apiUrl}?app_id=${this.appId}`);
            const rates = response.data.rates;
        
            if (rates && rates[to] && rates[from]) {
                const rateTo = rates[to];
                const rateFrom = rates[from];
                const usdAmount = amount / rateFrom; // conversion intermedia a usd
                const convertedAmount = usdAmount * rateTo; 
                return {response: convertedAmount.toString()} as IEjercicioUno;
                
            } else {
                throw new NotFoundException(`No se encontró la tasa de cambio para convertir de ${from} a ${to}`);
            }
       
        } catch (error) {
            console.error('Problema con la api!:', error.message);
            throw new NotFoundException('Hubo un problema conectando con la API');
          }
    }
}
