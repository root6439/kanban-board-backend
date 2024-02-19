import { DataSource } from "typeorm";
import { Card } from "./entities/card.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.host,
  port: 3306,
  username: "root",
  password: "1234",
  database: "kanban_board",
  synchronize: true,
  logging: true,
  entities: [Card],
  subscribers: [],
  migrations: [],
  dropSchema: true,
});

AppDataSource.initialize()
  .then(async () => {})
  .catch((err) => {
    console.error(err);
  });
