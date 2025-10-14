import express from "express";
const app = express();
import connectDb from "./config/db";
import dotenv from "dotenv";
import router from "./route/index";
dotenv.config();
connectDb();
const port = process.env.PORT || 8000;

app.use("/api/v1");
app.listen(port, () => {
  console.log(`server running  on the port at: ${port}`);
});
