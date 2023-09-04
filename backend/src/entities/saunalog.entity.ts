import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


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
}