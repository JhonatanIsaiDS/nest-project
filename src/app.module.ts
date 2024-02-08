import { Module } from '@nestjs/common';
import { UserController } from './components/user/user.controller';
import { UserService } from './components/user/user.service';
import { TypeOrmModuleOptions, TypeOrmModule } from '@nestjs/typeorm';
import {
  host_bd,
  name_bd,
  password_bd,
  port_bd,
  typeBd,
  user_name_bd,
} from './config';
import { UsuarioEntitie } from './entities/usuario.entitie';

export const dbOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: host_bd,
  port: parseInt(port_bd),
  username: user_name_bd,
  password: password_bd,
  database: name_bd,
  entities: [UsuarioEntitie],
  synchronize: true,
  logging: false,
  keepConnectionAlive: true,
  verboseRetryLog: true,
  connectTimeout: 2000,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(dbOptions),
    TypeOrmModule.forFeature([UsuarioEntitie]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
