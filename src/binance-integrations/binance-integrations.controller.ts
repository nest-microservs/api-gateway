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

@Controller("binance-integrations")
export class BinanceIntegrationsController {
  constructor(
    @Inject(BINANCE_INTEGRATIONS_SERVICE)
    private readonly binanceIntegrationsService: ClientProxy,
  ) {}

  @Post()
  create(@Body() createBinanceIntegrationDto: CreateBinanceIntegrationDto) {
    return this.binanceIntegrationsService.send(
      { cmd: "createBinanceIntegration" },
      createBinanceIntegrationDto,
    );
  }

  @Get()
  findAll() {
    return this.binanceIntegrationsService.send({ cmd: "findAllBinanceIntegrations" },
      {},
    );
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.binanceIntegrationsService.send(
      { cmd: "findOneBinanceIntegration" },
      { id: +id },
    );
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBinanceIntegrationDto: UpdateBinanceIntegrationDto,
  ) {
    return this.binanceIntegrationsService.send(
      { cmd: "updateBinanceIntegration" },
      { id: +id, ...updateBinanceIntegrationDto },
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.binanceIntegrationsService.send(
      { cmd: "removeBinanceIntegration" },
      { id: +id },
    );
  }
}
