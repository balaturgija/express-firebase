import { Router } from "express";
import { container } from "tsyringe";
import { engineCheck } from "../middlewares/engine-check.middleware";
import { queryFilter } from "../middlewares/queryFilter.middleware";
import { querySorter } from "../middlewares/querySorter.middleware";
import { validateBody } from "../middlewares/requestBody.middleware";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EngineFilterDto } from "./dto/engine-filter.dto";
import { EngineUpdateDto } from "./dto/engine-update.dto";
import { EnginesController } from "./engines.controller";

export const enginesRouter = Router();
const enginesController = container.resolve(EnginesController);

enginesRouter.get(
  "/",
  queryFilter(EngineFilterDto),
  querySorter(["id", "fuel", "horsePowers", "createdAt"]),
  enginesController.findAll
);
enginesRouter.post(
  "/",
  validateBody(EngineCreateDto),
  enginesController.create
);
enginesRouter.get("/:id", enginesController.getById);
enginesRouter.put(
  "/:id",
  validateBody(EngineUpdateDto),
  engineCheck(),
  enginesController.update
);
enginesRouter.delete("/:id", engineCheck(), enginesController.delete);
