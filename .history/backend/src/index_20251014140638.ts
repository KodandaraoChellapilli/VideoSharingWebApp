import express from "express";
const app = express();
import connectDb from "./config/db";
import dotenv from "dotenv";
import routes from "./route/index";
import passportJwtStrategy from "./config/passportJwtStrategy";
dotenv.config();
connectDb();
app.use(passportJwtStrategy.initialize());
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // we can pass data to url part too

app.use("/api/v1", routes);
app.listen(port, () => {
  console.log(`server running  on the port at: ${port}`);
});
