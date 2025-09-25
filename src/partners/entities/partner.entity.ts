import { ApiProperty } from "@nestjs/swagger";
import { Partners, Answer } from "@prisma/client";

export class PartnerEntity implements Partners {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  phone: string | null;

  @ApiProperty({ required: false, nullable: true })
  email: string | null;

  @ApiProperty({ enum: Answer })
  answer: Answer;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty({ required: false, nullable: true })
  membersId: number | null;
}
