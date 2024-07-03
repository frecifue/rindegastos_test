import { IsNotEmpty, IsNumber, IsNumberString } from "class-validator";

export class EjercicioTresDto{
    @IsNumberString()
    @IsNotEmpty()
    readonly first: string;

    @IsNumberString()
    @IsNotEmpty()
    readonly second: string;
}