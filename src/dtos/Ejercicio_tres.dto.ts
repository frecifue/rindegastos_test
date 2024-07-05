import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsNumber, IsNumberString, IsPositive } from "class-validator";

export class EjercicioTresDto{
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    readonly first: number;

    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    @IsInt()
    @Type(() => Number)
    readonly second: number;
}