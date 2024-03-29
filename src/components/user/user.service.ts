import { Injectable } from '@nestjs/common';
import * as USER from '../../json/user.json';
import { UserModel } from 'src/model/user.model';
import { UsuarioEntitie } from 'src/entities/usuario.entitie';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UsuarioEntitie)
    private usuarioRepository: Repository<UsuarioEntitie>,
  ) {}

  private user = USER;

  async getAllUsers() {
    const result = await this.usuarioRepository.find();
    console.log(result);
    return result;
  }
  async getUser(idUsuario: number) {
    const result = await this.usuarioRepository.findOne({
      where: {
        idUsuario: idUsuario,
      },
    });
    return result;
  }

  async createUser(body: UserModel) {
    const newUser = await this.usuarioRepository.create({
      nombre: body.nombre,
      edad: body.edad,
      telefono: body.telefono,
    });

    return await this.usuarioRepository.save(newUser);
  }

  async updateUser(body: UserModel) {
    const searchOldUser = await this.usuarioRepository.findOne({
      where: {
        idUsuario: body.idUsuario,
      },
    });
    const updateUser = await this.usuarioRepository.update(
      {
        idUsuario: body.idUsuario,
      },
      {
        nombre: body.nombre ?? searchOldUser?.nombre,
        edad: body.edad ?? searchOldUser?.edad,
        telefono: body.telefono ?? searchOldUser?.telefono,
      },
    );
    return updateUser;
  }
}
