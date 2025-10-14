import express from "express";
const app = express();
import connectDb from "./config/db";

connectDb();
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`server running  on the port at: ${PORT}`);
});
