import { Members as TestingMembers } from "@prisma/client";

import { Controller, Get, Post } from "@nestjs/common";

import { DatabaseService } from "./database.service";

@Controller("database")
export class DatabaseController {
  constructor(private prisma: DatabaseService) {}

  @Get("/")
  async testRead(): Promise<TestingMembers[]> {
    return this.prisma.members.findMany();
  }

  @Post("/")
  async testCreate(): Promise<void> {
    await this.prisma.members.create({
      data: {
        id: 11,
        name: "testName",
        surname: "testSurname",
        email: "test@example.com",
        indeks: 123_456,
        fieldOfSTudy: "Computer Science",
        section: "ML",
      },
    });
  }
}
