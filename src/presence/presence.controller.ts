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
import { PresenceService } from "./presence.service";
import { CreatePresenceDto } from "./dto/create-presence.dto";
import { UpdatePresenceDto } from "./dto/update-presence.dto";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { PresenceEntity } from "./entities/presence.entity";

@ApiTags("Presence")
@Controller("presence")
export class PresenceController {
  constructor(private readonly presenceService: PresenceService) {}

  @Post()
  @ApiOperation({ summary: "Create a new presence record" })
  @ApiCreatedResponse({ type: PresenceEntity })
  async create(@Body() createPresenceDto: CreatePresenceDto) {
    return this.presenceService.create(createPresenceDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all presence records" })
  @ApiOkResponse({ type: [PresenceEntity] })
  async findAll() {
    return this.presenceService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single presence record by ID" })
  @ApiOkResponse({ type: PresenceEntity })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.presenceService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a presence record" })
  @ApiOkResponse({ type: PresenceEntity })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updatePresenceDto: UpdatePresenceDto,
  ) {
    return this.presenceService.update(id, updatePresenceDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a presence record" })
  @ApiOkResponse({ type: PresenceEntity })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.presenceService.remove(id);
  }
}
