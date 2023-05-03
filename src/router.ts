import { Router } from "express";
import { carsRouter } from "./cars/cars.routes";
import { enginesRouter } from "./engines/engines.routes";
import { proposlasRouter } from "./proposals/proposlas.routes";

const router = Router();

router.use("/cars", carsRouter);
router.use("/engines", enginesRouter);
router.use("/proposals", proposlasRouter);

export default router;
