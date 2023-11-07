import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { UserModel } from 'src/model/user.model';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('search/allUser')
  async getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Post('search/:id')
  async getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Post('create')
  async createUser(@Body() body: UserModel) {
    return this.userService.createUser(body);
  }

  @Put('update')
  updateUser(@Body() body: UserModel) {
    return this.userService.updateUser(body);
  }
}
