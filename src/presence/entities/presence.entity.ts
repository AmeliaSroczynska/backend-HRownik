import { ApiProperty } from "@nestjs/swagger";
import { Presence } from "@prisma/client";

export class PresenceEntity implements Presence {
  @ApiProperty()
  id: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  isPresent: boolean;

  @ApiProperty({ required: false, nullable: true })
  comment: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  membersId: number;
}
