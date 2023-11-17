import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Saunalog } from "./saunalog.entity";


@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: false })
  id: number;

  @Column({ length: 16, charset: 'utf8' })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'varchar', length: 32 })
  password: string;

  @OneToMany(() => Saunalog, (Saunalog) => Saunalog.user)
  saunalogs: Saunalog[];
}