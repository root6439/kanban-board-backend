import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("card")
export class Card {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  status: string;
}
