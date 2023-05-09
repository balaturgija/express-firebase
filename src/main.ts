import "reflect-metadata";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./router";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerDefinition from "./swagger.json";
import swaggerUi from "swagger-ui-express";

dotenv.config({
  path: path.resolve(".env"),
});

const app: any = express();

const swaggerDocs = swaggerJSDoc({
  swaggerDefinition,
  apis: [path.join(__dirname, "..", "src", "specs", "*.ts")],
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(Number(process.env.PORT) || 3000);
