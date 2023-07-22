import { config } from "dotenv";
import knex from "knex";
config();

const db = knex({
  client: "pg",
  connection: {
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});

export default db;
