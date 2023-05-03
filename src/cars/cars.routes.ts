import { Router } from "express";
import { container } from "tsyringe";
import { CarsController } from "./cars.controller";

export const carsRouter = Router();
const carsController = container.resolve(CarsController);

carsRouter.get("/", carsController.findAll);
