import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from "@nestjs/common";
import { MembersService } from "./members.service";
import { CreateMemberDto } from "./dto/create-member.dto";
import { UpdateMemberDto } from "./dto/update-member.dto";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { MemberEntity } from "./entities/member.entity";

@ApiTags("Members")
@Controller("members")
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new member" })
  @ApiCreatedResponse({ type: MemberEntity })
  async create(@Body() createMemberDto: CreateMemberDto) {
    return this.membersService.create(createMemberDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all members" })
  @ApiOkResponse({ type: [MemberEntity] })
  async findAll() {
    return this.membersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single member by ID" })
  @ApiOkResponse({ type: MemberEntity })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.membersService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a member" })
  @ApiOkResponse({ type: MemberEntity })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateMemberDto: UpdateMemberDto,
  ) {
    return this.membersService.update(id, updateMemberDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a member" })
  @ApiOkResponse({ type: MemberEntity })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.membersService.remove(id);
  }
}
