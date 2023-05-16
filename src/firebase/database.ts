import { initializeApp, cert } from "firebase-admin/app";
import * as admin from "firebase-admin";
import serviceAccount from "../firebase-pk.json";

initializeApp({
  credential: cert(JSON.parse(JSON.stringify(serviceAccount))),
});

export const db = admin.firestore();
db.settings({
  ignoreUndefinedProperties: false,
});
