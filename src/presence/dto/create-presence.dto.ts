import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

export class CreatePresenceDto {
  @Type(() => Date)
  @IsDateString()
  date: Date;

  @IsBoolean()
  isPresent: boolean;

  @IsString()
  @IsOptional()
  comment?: string;

  @IsInt()
  @IsNotEmpty()
  membersId: number;
}
