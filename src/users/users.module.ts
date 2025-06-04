import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { USERS_SERVICE } from "../config";
import { envs } from "../config";

@Module({
  controllers: [UsersController],
  imports: [
    ClientsModule.register([
      {
        name: USERS_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.usersServiceHost,
          port: envs.usersServicePort,
        },
      },
    ]),
  ],
})
export class UsersModule {}
