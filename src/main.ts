import "reflect-metadata";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./router";

dotenv.config({
  path: path.resolve(".env"),
});

const app: any = express();

app.use("/", router);

app.listen(Number(process.env.PORT) || 3000);
