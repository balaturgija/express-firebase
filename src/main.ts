import "reflect-metadata";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDefinition from "./swagger.json";
import swaggerUi from "swagger-ui-express";
import { exceptionHandler } from "./middlewares/exceptionHandler.middleware";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config({
  path: path.resolve(".env"),
});

const app: any = express();
app.use(
  cors({
    origin: "*",
  })
);
const swaggerDocs = swaggerJSDoc({
  swaggerDefinition,
  apis: [path.join(__dirname, "..", "src", "specs", "*.ts")],
});

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(exceptionHandler);
app.listen(Number(process.env.PORT) || 3000);
