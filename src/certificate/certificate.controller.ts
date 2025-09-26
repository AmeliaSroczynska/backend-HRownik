import type { Response } from "express";

import { Controller, Get, Res } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { CertificateService } from "./certificate.service";

@ApiTags("certificates")
@Controller("certificates")
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get("/generate/all")
  @ApiOperation({ summary: "Generate all avaible certificates" })
  async download(@Res() response: Response) {
    const zip = await this.certificateService.generateCertificates();

    response.set({
      "Content-Type": "application/zip",
    });

    response.send(zip);
  }
}
