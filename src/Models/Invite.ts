import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from "firebase/firestore";
import ElementFactory from "../Components/ElementFactory";

export default class Invite{
    id?: string="";
    from?: string;
    to?: string;
    invitedTo?: string;
    constructor(id?:string,from?: string, to?: string, invitedTo?: string){
        this.id = id;
        this.from = from;
        this.to = to;
        this.invitedTo = invitedTo;
    }

    static async removeInvite(inviteId:string){
        const db = getFirestore();
        const ref = collection(db, 'invites');
        const docRef = doc(ref, inviteId);
        await deleteDoc(docRef);
    }

    static async acceptInvite(inviteId:string, toProjectId:string, toWhom:string){
        // add the user to the project
        // remove the invite
        const db = getFirestore();
        const projectRef = doc(db, 'projects', toProjectId);
        const project = await getDoc(projectRef);
        const projectData = project.data();
        projectData!.joinedUsers.push(toWhom);

        await updateDoc(projectRef, {
            joinedUsers: projectData!.joinedUsers
        });

        await this.removeInvite(inviteId);
    }


    
    async createInvite(){
        const db = getFirestore();
        const ref = collection(db, 'invites');
        const docRef = await addDoc(ref, {
            id: ref.id,
            from: this.from,
            to: this.to,
            invitedTo: this.invitedTo
        });
        return docRef.id;
    }

    static async getInvites(userId: string){
        const db = getFirestore();
        const ref = collection(db, 'invites');
        const q = query(ref, where('to', '==', userId));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc)=>({
          id: doc.id,
          ...doc.data()
        }));
    }
}