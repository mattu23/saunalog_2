import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Saunalog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20, nullable: false })
  name: string;

  @Column()
  area: string;

  @Column()
  rank: number;

  @Column('varchar', { length: 100, nullable: false })
  comment: string;

  @CreateDateColumn()
  readonly created_at?: Date;

  @ManyToOne(() => User, (user) => user.saunalogs)
  user: User;
} 