import express from "express";
const router = express.Router();
import authRoute from "./authRoute";

router.use("/auth");

export default router;
