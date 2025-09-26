import type { Response } from "express";

import { Controller, Get, Param, ParseIntPipe, Res } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

import { CertificateService } from "./certificate.service";

@ApiTags("certificates")
@Controller("certificates")
export class CertificateController {
  constructor(private readonly certificateService: CertificateService) {}

  @Get("/generate/all")
  @ApiOperation({ summary: "Generate all avaible certificates" })
  async generateAll(@Res() response: Response) {
    const zip = await this.certificateService.generateCertificates();

    response.set({
      "Content-Type": "application/zip",
    });

    response.send(zip);
  }

  @Get("/generate/:id")
  @ApiOperation({
    summary: "Generate one certificate for user with choosen id",
  })
  async generateOne(
    @Param("id", ParseIntPipe) id: number,
    @Res() response: Response,
  ) {
    const pdf = await this.certificateService.generateOneCertificate(id);
    response.set({
      "Content-Type": "application/pdf",
    });
    response.send(pdf);
  }
}
