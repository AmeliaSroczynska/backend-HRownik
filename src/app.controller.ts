import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

@ApiTags("App")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: "testowy get" })
  @ApiOkResponse({
    description: "zwraca hello worlda",
    type: String,
  })
  getHello(): string {
    return this.appService.getHello();
  }
}
