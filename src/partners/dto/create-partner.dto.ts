import { Answer } from "@prisma/client";
import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsEnum,
  IsInt,
} from "class-validator";

export class CreatePartnerDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsEnum(Answer)
  answer: Answer;

  @IsInt()
  @IsOptional()
  membersId?: number;
}
