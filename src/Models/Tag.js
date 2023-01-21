import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { DEFAULT_TAGS } from "../Lib/consts";
export class Tag {
    constructor(tag, color) {
        this.tag = tag;
        this.color = color;
    }
    // this factory will create some basic tags that can be used
    // DO NOT REMOVE THIS
    static async factory() {
        const db = getFirestore();
        DEFAULT_TAGS.forEach(async (tag) => {
            const ref = collection(db, 'tags');
            await addDoc(ref, tag);
        });
    }
    static async getAllTags() {
        const db = getFirestore();
        const ref = collection(db, 'tags');
        let allTags = [];
        const snapshot = await getDocs(ref);
        return snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    }
}
