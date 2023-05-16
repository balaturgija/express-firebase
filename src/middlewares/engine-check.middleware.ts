import { NextFunction, Request } from "express";
import { Response } from "firebase-functions/v1";
import { EnginesService } from "../engines/engines.service";
import { EnginesRepsoitory } from "../engines/enignes.repository";

export const engineCheck = () => {
  return async (req: Request, response: Response, next: NextFunction) => {
    const engineService = new EnginesService(new EnginesRepsoitory());
    try {
      let engineId;
      if (req.body.engineId) engineId = req.body.engineId;

      engineId = req.params.id;

      await engineService.getById(engineId);

      next();
    } catch (error) {
      next(error);
    }
  };
};
