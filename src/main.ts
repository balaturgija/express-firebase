import "reflect-metadata";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDefinition from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import { initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";

const serviceAccount = require("./firebase-pk.json");

initializeApp({
  credential: cert(serviceAccount),
});

export const db = admin.firestore();

dotenv.config({
  path: path.resolve(".env"),
});

const app: any = express();

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition,
  apis: ["/src"],
});

app.use("/", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(Number(process.env.PORT) || 3000);
