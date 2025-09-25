import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsInt,
} from "class-validator";

export class CreateMemberDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  surname: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsInt()
  @IsOptional()
  indeks?: number;

  @IsString()
  @IsOptional()
  fieldOfSTudy?: string;

  @IsString()
  @IsOptional()
  section?: string;
}
