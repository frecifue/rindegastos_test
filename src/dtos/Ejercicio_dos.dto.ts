import { Transform } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString, Matches } from "class-validator";

export class EjercicioDosDto {
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha debe estar en el formato a�o-mes-d�a (YYYY-MM-DD)' })
    @IsNotEmpty()
    birthdate: string;
  }