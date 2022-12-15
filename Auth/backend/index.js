import express from "express";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";

const app = express();

try {
  await db.authenticate();
  console.log("Conected");
  //   await Users.sync();
} catch (error) {
  console.error(error);
}

app.use(express.json);
app.use(router);
app.listen(5000, () => console.log("Server running"));
