import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsPositive, IsString, IsUppercase, Length, MaxLength, MinLength } from "class-validator";

export class EjercicioUnoDto{
    @IsString()
    @IsNotEmpty()
    @Length(3, 3, { message: 'El campo from debe tener exactamente 3 caracteres' })
    @IsUppercase({ message: 'El campo from debe estar en mayúsculas' })
    readonly from: string;

    @IsString()
    @IsNotEmpty()
    @Length(3, 3, { message: 'El campo from debe tener exactamente 3 caracteres' })
    @IsUppercase({ message: 'El campo from debe estar en mayúsculas' })
    readonly to: string;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Type(() => Number)
    readonly amount: number;
}