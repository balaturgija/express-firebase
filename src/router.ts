import { Router } from "express";
import { carsRouter } from "./cars/cars.routes";
import { enginesRouter } from "./engines/engines.routes";

const router = Router();

router.use("/cars", carsRouter);
router.use("/engines", enginesRouter);

export default router;
