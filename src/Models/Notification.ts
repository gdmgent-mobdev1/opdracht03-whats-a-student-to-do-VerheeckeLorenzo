import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export default class Notification{
    from?: string;
    to?: string;
    invitedTo?: string;
    constructor(from?: string, to?: string, invitedTo?: string){
        this.from = from;
        this.to = to;
        this.invitedTo = invitedTo;
    }

    static async getNotifications(userId: string){
        const db = getFirestore();
        const ref = collection(db, 'notifications');
        const q = query(ref, where('to', '==', userId));
        const snapshot = await getDocs(q);
        console.log(snapshot);
        return snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }));
    }
}