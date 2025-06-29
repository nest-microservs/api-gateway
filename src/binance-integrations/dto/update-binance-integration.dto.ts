import { PartialType } from "@nestjs/mapped-types";
import { CreateBinanceIntegrationDto } from "./create-binance-integration.dto";

export class UpdateBinanceIntegrationDto extends PartialType(
  CreateBinanceIntegrationDto,
) {}
