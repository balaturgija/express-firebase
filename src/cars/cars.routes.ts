import { Router } from "express";
import { container } from "tsyringe";
import { engineCheck } from "../middlewares/engine-check.middleware";
import { queryFilter } from "../middlewares/queryFilter.middleware";
import { querySorter } from "../middlewares/querySorter.middleware";
import { validateBody } from "../middlewares/requestBody.middleware";
import { CarsController } from "./cars.controller";
import { CarCreateDto } from "./dto/car-create.dto";
import { CarFilterDto } from "./dto/car-filter.dto";
import { CarUpdateDto } from "./dto/car-update.dto";

export const carsRouter = Router();
const carsController = container.resolve(CarsController);

carsRouter.get(
  "/",
  queryFilter(CarFilterDto),
  querySorter(["id", "brand", "model", "kilometers", "createdAt", "updatedAt"]),
  carsController.findAll
);
carsRouter.post(
  "/",
  validateBody(CarCreateDto),
  engineCheck(),
  carsController.create
);
carsRouter.put("/:id", validateBody(CarUpdateDto), carsController.update);
carsRouter.get("/:id", carsController.getById);
carsRouter.delete("/:id", carsController.delete);
