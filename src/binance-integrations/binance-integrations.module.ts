import { Module } from "@nestjs/common";
import { BinanceIntegrationsController } from "./binance-integrations.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { BINANCE_INTEGRATIONS_SERVICE, envs } from "src/config";

@Module({
  controllers: [BinanceIntegrationsController],
  imports: [
    ClientsModule.register([
      {
        name: BINANCE_INTEGRATIONS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.binanceServiceHost,
          port: envs.binanceServicePort,
        },
      },
    ]),
  ],
})
export class BinanceIntegrationsModule {}
