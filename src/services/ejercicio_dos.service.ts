import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { format, differenceInDays, addYears, isBefore, setHours, setMinutes, setSeconds, addDays, parseISO, isValid } from 'date-fns';
import { IEjercicioDos } from 'src/common/interfaces/ejercicio_dos.interface';

@Injectable()
export class EjercicioDosService {

    // Establece la hora, minuto y segundo deseados
    standardizeTime = (date: Date) => {
        date = setHours(date, 0);
        date = setMinutes(date, 0);
        date = setSeconds(date, 0);
        return date;
    };


    getDaysUntilMyBirthday(birthdate: string): IEjercicioDos {

        const today = new Date();
        let birthdateFormat = parseISO(birthdate);
        let response = '';
        let nextBirthday;
        let diffDaysToBirthDay;

        if(!isValid(birthdateFormat)){
            throw new HttpException('Fecha no válida', HttpStatus.BAD_REQUEST);
        }
        // Agregar un dï¿½a a la fecha de nacimiento.. 
        birthdateFormat = addDays(birthdateFormat, 1);

        // Formatear todas las fechas con la misma hora, minuto y segundo
        const standardizedToday = this.standardizeTime(today);
        const standardizedBirthdate = this.standardizeTime(birthdateFormat);
        
        if(standardizedBirthdate < standardizedToday){
            const currentYear = standardizedToday.getFullYear();
            nextBirthday = new Date(currentYear, standardizedBirthdate.getMonth(), standardizedBirthdate.getDate());
            
            nextBirthday = this.standardizeTime(nextBirthday);
    
            if (isBefore(nextBirthday, standardizedToday) || nextBirthday.getDate() !== standardizedBirthdate.getDate()) {
                nextBirthday = addYears(nextBirthday, 1);
                nextBirthday = this.standardizeTime(nextBirthday);
            }
    
            diffDaysToBirthDay = differenceInDays(nextBirthday, standardizedToday);

    
            if(diffDaysToBirthDay === 0){
                response = 'Felicidades! hoy es tu cumpleaños!'
            }else{
                response = `quedan ${diffDaysToBirthDay} días para tu cumpleaños!`;
            }
        }else{
            response = 'Usted nisiquiera ha nacido aún..';
        }

        

        return { 
            birthDayDate: birthdateFormat,
            nextBirthDayDate: nextBirthday,
            daysUntilMyBirthday: diffDaysToBirthDay,
            message: response,
        } as IEjercicioDos;
    }
}
