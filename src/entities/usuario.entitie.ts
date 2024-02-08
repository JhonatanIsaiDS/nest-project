import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('Usuarios', { schema: 'Usuarios' })
export class UsuarioEntitie {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IdUsuario' })
  idUsuario: number;

  @Column('varchar', { name: 'Nombre', length: 50 })
  nombre: string;

  @Column('int', { name: 'Edad' })
  edad: number;

  @Column('varchar', { name: 'Telefono', length: 15 })
  telefono: string;
}
