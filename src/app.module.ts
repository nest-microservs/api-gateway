import { Module } from "@nestjs/common";
import { UsersModule } from "./users/users.module";
import { BinanceIntegrationsModule } from "./binance-integrations/binance-integrations.module";

@Module({
  imports: [UsersModule, BinanceIntegrationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
