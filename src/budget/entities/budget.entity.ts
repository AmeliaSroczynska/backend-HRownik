import { ApiProperty } from "@nestjs/swagger";
import { Budget } from "@prisma/client";

export class BudgetEntity implements Budget {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  membersId: number | null;
}
