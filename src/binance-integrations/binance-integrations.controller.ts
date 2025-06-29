import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from "@nestjs/common";
import { CreateBinanceIntegrationDto } from "./dto/create-binance-integration.dto";
import { UpdateBinanceIntegrationDto } from "./dto/update-binance-integration.dto";
import { ClientProxy } from "@nestjs/microservices";
import { BINANCE_INTEGRATIONS_SERVICE } from "src/config";

@Controller("binance")
export class BinanceIntegrationsController {
  constructor(
    @Inject(BINANCE_INTEGRATIONS_SERVICE)
    private readonly binanceIntegrationsService: ClientProxy,
  ) {}

  /* Spot */
  @Get("spot/getPriceTicker")
  getPriceTicker() {
    return this.binanceIntegrationsService.send({ cmd: "getPriceTicker" }, {});
  }

  @Get("spot/get24hrTicker")
  get24hrTicker() {
    return this.binanceIntegrationsService.send({ cmd: "get24hrTicker" }, {});
  }

  @Get("spot/:id")
  findOne(@Param("id") id: string) {
    return this.binanceIntegrationsService.send("findOneSpot", { id: +id });
  }

  @Patch("spot/:id")
  update(
    @Param("id") id: string,
    @Body() updateBinanceIntegrationDto: UpdateBinanceIntegrationDto,
  ) {
    return this.binanceIntegrationsService.send("updateSpot", {
      id: +id,
      ...updateBinanceIntegrationDto,
    });
  }

  @Delete("spot/:id")
  remove(@Param("id") id: string) {
    return this.binanceIntegrationsService.send("removeSpot", { id: +id });
  }

  /* Wallet */
  @Get("wallet/getWalletBalance")
  getWalletBalance() {
    return this.binanceIntegrationsService.send(
      { cmd: "getWalletBalance" },
      {},
    );
  }

  @Get("wallet/getAllCoinsInfo")
  getAllCoinsInfo() {
    return this.binanceIntegrationsService.send({ cmd: "getAllCoinsInfo" }, {});
  }
}
