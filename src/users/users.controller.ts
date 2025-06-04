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
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { ClientProxy } from "@nestjs/microservices";
import { USERS_SERVICE } from "src/config";

@Controller("users")
export class UsersController {
  constructor(
    @Inject(USERS_SERVICE) private readonly usersService: ClientProxy,
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.send({ cmd: "createUser" }, createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.send({ cmd: "findAllUsers" }, {});
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.usersService.send({ cmd: "findOneUser" }, { id: +id });
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.send(
      { cmd: "updateUser" },
      { id: +id, ...updateUserDto },
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.send({ cmd: "removeUser" }, { id: +id });
  }
}
