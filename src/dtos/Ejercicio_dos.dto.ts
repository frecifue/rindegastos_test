import { Transform } from "class-transformer";
import { IsDateString, IsString, Matches } from "class-validator";

export class EjercicioDosDto {
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'La fecha debe estar en el formato año-mes-día (YYYY-MM-DD)' })
    birthdate: string;
  }