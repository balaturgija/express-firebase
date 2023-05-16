export function isFirebaseData(
  data: FirebaseFirestore.DocumentData | undefined
): data is FirebaseFirestore.DocumentData {
  if (!data) return false;

  const object = data as FirebaseFirestore.DocumentData;
  return object !== undefined;
}
