import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app)
export default async function addData(colllection, id, data) {
    let result = null;
    let error = null;
    try {
        result = await setDoc(doc(db, colllection, id), data, {
            merge: true,
        });
        result = true
    } catch (e) {
        result = false
        error = e;
    }

    return { result, error };
}