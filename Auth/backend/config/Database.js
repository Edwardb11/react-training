import { Sequelize } from "sequelize";

const db = new Sequelize("auth_bd", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
