import JSZip from "jszip";
import * as fs from "node:fs/promises";
import { PDFDocument } from "pdf-lib";
import { PrismaService } from "prisma/prisma.service";

import { Injectable } from "@nestjs/common";

@Injectable()
export class CertificateService {
  constructor(private prisma: PrismaService) {}

  //trzeba bedzie zaladowac jeszcze fonta z polskimi znakami
  async generateCertificates() {
    const zip = JSZip();

    const members = await this.prisma.members.findMany();

    for (const member of members) {
      const template = await fs.readFile("src/certificate/certificate.pdf");
      const pdfDocument = await PDFDocument.load(template);

      const page = pdfDocument.getPages()[0];

      page.drawText(
        `Certyfikat dla uzytkownika ${member.name} ${member.surname}`,
      );

      const pdfBytes = await pdfDocument.save();
      zip.file(`${member.name}${member.surname}.pdf`, pdfBytes);
    }
    const zipBytes = await zip.generateAsync({ type: "nodebuffer" });
    return zipBytes;
  }
}
