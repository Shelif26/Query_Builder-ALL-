import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn({
    type: "int",
  })
  id: number;

  @Column({
    type: "varchar",
  })
  UUId: string;

  @Column({
    type: "varchar",
  })
  Customername: string;

  @Column({
    type: "varchar",
  })
  age: number;
}
