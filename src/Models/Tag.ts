import { addDoc, collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { DEFAULT_TAGS } from "../Lib/consts";

export class Tag{
    tag: string;
    color: string;
    constructor(tag: string, color: string) {
        this.tag = tag;
        this.color = color;
    }


    // this factory will create some basic tags that can be used
    // DO NOT REMOVE THIS
    static async factory(){
        const db = getFirestore();
        DEFAULT_TAGS.forEach(async (tag) => {
            const ref = collection(db, 'tags');
            await addDoc(ref, tag);
        });
    }

    static async getAllTags(){
        const db = getFirestore();
        const ref = collection(db, 'tags');
        let allTags:Tag[] = [];
        const snapshot = await getDocs(ref);
        return snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
        }));
    }
}