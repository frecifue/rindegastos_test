import { Injectable } from '@nestjs/common';
import { format, differenceInDays, addYears, isBefore } from 'date-fns';
import { IEjercicioDos } from 'src/common/interfaces/ejercicio_dos.interface';

@Injectable()
export class EjercicioDosService {

    getDaysUntilMyBirthday(birthdate: Date): IEjercicioDos {

        console.log('birthdate:', format(birthdate, 'yyyy-MM-dd'));

        const today = new Date();
        const bithDateFormat = new Date(birthdate);
        console.log('today:', format(today, 'yyyy-MM-dd'));
        
        const currentYear = today.getFullYear();
        let nextBirthday = new Date(currentYear, bithDateFormat.getMonth(), bithDateFormat.getDate());
        
        console.log('next birthday before adjustment:', format(nextBirthday, 'yyyy-MM-dd'));

        if (isBefore(nextBirthday, today) || nextBirthday.getDate() !== bithDateFormat.getDate()) {
            nextBirthday = addYears(nextBirthday, 1);
        }

        console.log('next birthday:', format(nextBirthday, 'yyyy-MM-dd'));

        const diffDays = differenceInDays(nextBirthday, today);
        
        return { response: `quedan ${diffDays} días para tu cumpleaños!` } as IEjercicioDos;
    }
}
