import { isEngine } from "../../engines/types/engine.type.guard";
import { Car } from "../modules/car.modul";

export function isCar(
  data: FirebaseFirestore.DocumentData | undefined
): data is Car {
  if (!data) return false;

  const car = data as Car;
  const validateProps: Array<keyof typeof car> = [
    "id",
    "brand",
    "model",
    "kilometers",
    "createdAt",
    "updatedAt",
  ];

  return (
    validateProps.every((val) => car.hasOwnProperty(val)) &&
    isEngine(car.engine)
  );
}
