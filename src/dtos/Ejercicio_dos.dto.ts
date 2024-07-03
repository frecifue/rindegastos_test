import { Transform } from "class-transformer";
import { IsDateString } from "class-validator";

export class EjercicioDosDto {
    @IsDateString()
    @Transform(({ value }) => {
        const date = new Date(value);
        return date.toISOString(); // Transforma la fecha a formato ISO 8601
    })
    birthdate: Date;
  }