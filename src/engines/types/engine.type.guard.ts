import { Engine } from "../models/engine.modul";

export function isEngine(
  data: FirebaseFirestore.DocumentData | undefined
): data is Engine {
  if (!data) return false;

  const engine = data as Engine;
  const validProps: Array<keyof typeof engine> = [
    "id",
    "fuel",
    "horsePowers",
    "createdAt",
    "updatedAt",
  ];
  return validProps.every((val) => engine.hasOwnProperty(val));
}
