import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('Usuario', { schema: 'Usuarios' })
export class UsuarioEntitie {
  @PrimaryGeneratedColumn({ type: 'int', name: 'IdUsuario' })
  idUsuario: number;

  @Column('varchar', { name: 'Nombre', length: 50 })
  nombre: string;

  @Column('int', { name: 'Edad' })
  edad: number;
}
