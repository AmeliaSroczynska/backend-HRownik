import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";

import { DatabaseController } from "./database.controller";

describe.skip("DatabaseController", () => {
  let controller: DatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatabaseController],
    }).compile();

    controller = module.get<DatabaseController>(DatabaseController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
