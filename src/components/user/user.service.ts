import { Injectable } from '@nestjs/common';
import * as USER from '../../json/user.json';
import { UserModel } from 'src/model/user.model';
@Injectable()
export class UserService {
  constructor() {}

  private user = USER;

  async getAllUsers() {
    return this.user;
  }
  async getUser(id: number) {
    return this.user.find((user) => user.id === id);
  }

  async createUser(body: UserModel) {
    console.log(this.user.length + 1);
    this.user.push({
      id: this.user.length + 1,
      name: body.name,
      age: body.age,
    });

    return this.user;
  }

  async updateUser(body: UserModel) {
    this.user.map((user) => {
      if (user.id === body.id) {
        user.name = body.name;
        user.age = body.age;
      }
    });
    return this.user;
  }
}
