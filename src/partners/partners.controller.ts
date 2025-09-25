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
import { PartnersService } from "./partners.service";
import { CreatePartnerDto } from "./dto/create-partner.dto";
import { UpdatePartnerDto } from "./dto/update-partner.dto";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { PartnerEntity } from "./entities/partner.entity";

@ApiTags("Partners")
@Controller("partners")
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Post()
  @ApiOperation({ summary: "Create a new partner" })
  @ApiCreatedResponse({ type: PartnerEntity })
  async create(@Body() createPartnerDto: CreatePartnerDto) {
    return this.partnersService.create(createPartnerDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all partners" })
  @ApiOkResponse({ type: [PartnerEntity] })
  async findAll() {
    return this.partnersService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single partner by ID" })
  @ApiOkResponse({ type: PartnerEntity })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.partnersService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a partner" })
  @ApiOkResponse({ type: PartnerEntity })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updatePartnerDto: UpdatePartnerDto,
  ) {
    return this.partnersService.update(id, updatePartnerDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a partner" })
  @ApiOkResponse({ type: PartnerEntity })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.partnersService.remove(id);
  }
}
