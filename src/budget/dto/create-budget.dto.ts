import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsInt,
  IsOptional,
} from "class-validator";

export class CreateBudgetDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  amount: number;

  @IsInt()
  @IsOptional()
  membersId?: number;
}
