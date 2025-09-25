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
import { BudgetService } from "./budget.service";
import { CreateBudgetDto } from "./dto/create-budget.dto";
import { UpdateBudgetDto } from "./dto/update-budget.dto";
import {
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from "@nestjs/swagger";
import { BudgetEntity } from "./entities/budget.entity";

@ApiTags("Budget")
@Controller("budget")
export class BudgetController {
  constructor(private readonly budgetService: BudgetService) {}

  @Post()
  @ApiOperation({ summary: "Create a new budget item" })
  @ApiCreatedResponse({ type: BudgetEntity })
  async create(@Body() createBudgetDto: CreateBudgetDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  @ApiOperation({ summary: "Get all budget items" })
  @ApiOkResponse({ type: [BudgetEntity] })
  async findAll() {
    return this.budgetService.findAll();
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a single budget item by ID" })
  @ApiOkResponse({ type: BudgetEntity })
  async findOne(@Param("id", ParseIntPipe) id: number) {
    return this.budgetService.findOne(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Update a budget item" })
  @ApiOkResponse({ type: BudgetEntity })
  async update(
    @Param("id", ParseIntPipe) id: number,
    @Body() updateBudgetDto: UpdateBudgetDto,
  ) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a budget item" })
  @ApiOkResponse({ type: BudgetEntity })
  async remove(@Param("id", ParseIntPipe) id: number) {
    return this.budgetService.remove(id);
  }
}
