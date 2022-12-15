import express from "express";
import dotenv from "dotenv";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";

const app = express();
const PORT = 5000;
dotenv.config();
try {
  await db.authenticate();
  console.log("Conected");
  await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(express.json());
app.use(router);
app.listen(PORT, () => console.log(`Server running ${PORT}`));
