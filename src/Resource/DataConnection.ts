import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Customer } from "../Entity/customer";

dotenv.config();

export const DbConnection = new DataSource({
  type: "postgres",
  host: "localhost",
  username: "postgres",
  password: "164116",
  port: 5432,
  database: "sample",
  synchronize: true,
  entities: [Customer],
});
