import { Injectable } from '@nestjs/common';
import { format, differenceInDays, addYears, isBefore, setHours, setMinutes, setSeconds, addDays, parseISO } from 'date-fns';
import { IEjercicioDos } from 'src/common/interfaces/ejercicio_dos.interface';

@Injectable()
export class EjercicioDosService {

    getDaysUntilMyBirthday(birthdate: string): IEjercicioDos {

        // Establece la hora, minuto y segundo deseados
        const standardizeTime = (date: Date) => {
            date = setHours(date, 0);
            date = setMinutes(date, 0);
            date = setSeconds(date, 0);
            return date;
        };

        const today = new Date();
        let birthdateFormat = parseISO(birthdate);

        // Agregar un d�a a la fecha de nacimiento.. 
        birthdateFormat = addDays(birthdateFormat, 1);

        // Formatear todas las fechas con la misma hora, minuto y segundo
        const standardizedToday = standardizeTime(today);
        const standardizedBirthdate = standardizeTime(birthdateFormat);
        console.log('----------------------')
        console.log('fecha ingresada:', format(standardizedBirthdate, 'yyyy-MM-dd HH:mm:ss'));
        console.log('fecha hoy:', format(standardizedToday, 'yyyy-MM-dd HH:mm:ss'));

        const currentYear = standardizedToday.getFullYear();
        let nextBirthday = new Date(currentYear, standardizedBirthdate.getMonth(), standardizedBirthdate.getDate());
        
        nextBirthday = standardizeTime(nextBirthday);

        console.log('fecha cumpleaños de este año:', format(nextBirthday, 'yyyy-MM-dd HH:mm:ss'));

        if (isBefore(nextBirthday, standardizedToday) || nextBirthday.getDate() !== standardizedBirthdate.getDate()) {
            nextBirthday = addYears(nextBirthday, 1);
            nextBirthday = standardizeTime(nextBirthday);
        }

        console.log('proximo cumpleaños:', format(nextBirthday, 'yyyy-MM-dd HH:mm:ss'));

        const diffDaysToBirthDay = differenceInDays(nextBirthday, standardizedToday);

        let response = '';

        if(diffDaysToBirthDay === 0){
            response = 'Felicidades! hoy es tu cumpleaños!'
        }else{
            response = `quedan ${diffDaysToBirthDay} días para tu cumpleaños!`;
        }

        return { 
            birthDayDate: birthdateFormat,
            nextBirthDayDate: nextBirthday,
            daysUntilMyBirthday: diffDaysToBirthDay,
            message: response,
        } as IEjercicioDos;
    }
}
