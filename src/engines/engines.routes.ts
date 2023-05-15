import { Router } from "express";
import { container } from "tsyringe";
import { validateBody } from "../middlewares/requestBody.middleware";
import { EngineCreateDto } from "./dto/engine-create.dto";
import { EnginesController } from "./engines.controller";
import { EnginesService } from "./engines.service";

export const enginesRouter = Router();
const enginesController = container.resolve(EnginesController);

enginesRouter.post(
  "/",
  validateBody(EngineCreateDto),
  enginesController.create
);

enginesRouter.get("/:id", enginesController.getById);
