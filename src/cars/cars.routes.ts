import { Router } from "express";
import { container } from "tsyringe";
import { validateBody } from "../middlewares/requestBody.middleware";
import { CarsController } from "./cars.controller";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarUpdateDto } from "./dto/car-update.dto";

export const carsRouter = Router();
const carsController = container.resolve(CarsController);

carsRouter.get("/", carsController.findAll);
carsRouter.post("/", validateBody(CarCreateDto), carsController.create);
carsRouter.put("/:id", validateBody(CarUpdateDto), carsController.update);
carsRouter.get("/:id", carsController.getById);
carsRouter.delete("/:id", carsController.delete);
