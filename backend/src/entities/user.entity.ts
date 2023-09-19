import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: false })
  id: number;

  @Column({ length: 16, charset: 'utf8' })
  name: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password: string;

}