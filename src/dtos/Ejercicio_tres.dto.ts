import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsNumberString, IsPositive } from "class-validator";

export class EjercicioTresDto{
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Type(() => Number)
    readonly first: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @Type(() => Number)
    readonly second: number;
}