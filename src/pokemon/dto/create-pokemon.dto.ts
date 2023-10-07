import { IsPositive, IsInt, MinLength, IsString, Min } from 'class-validator';

export class CreatePokemonDto {
  @IsPositive({ message: 'El numero del pokemon debe ser positivo ' })
  @IsInt({ message: 'Solo se permiten valores enteros' })
  @Min(1)
  no: number;

  @IsString({ message: 'El nombre del pokemon debe ser un string' })
  @MinLength(1, { message: 'Nombre pokemon no valido' })
  name: string;
}
