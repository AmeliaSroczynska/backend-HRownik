import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DatabaseModule } from "./database/database.module";
import { PrismaModule } from "../prisma/prisma.module";
import { MembersModule } from "./members/members.module";
import { BudgetModule } from "./budget/budget.module";
import { PartnersModule } from "./partners/partners.module";
import { PresenceModule } from "./presence/presence.module";

@Module({
  imports: [
    DatabaseModule,
    PrismaModule,
    MembersModule,
    BudgetModule,
    PartnersModule,
    PresenceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
