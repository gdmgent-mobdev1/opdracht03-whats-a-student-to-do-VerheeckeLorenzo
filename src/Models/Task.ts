import { addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore";
import User from "./User";

export class Task{
    id?: string;
    title: string;
    description: string;
    deadline: Date;
    timeNeeded: number;
    timeSpent?: number = 0;
    assigned_to?: string;
    constructor(title:string,description: string, deadline:Date, timeNeeded:number, assigned_to?: string, id?: string, timeSpent?: number){
        this.id = id;
        this.title=title;
        this.description = description;
        this.deadline = deadline;
        this.timeNeeded = timeNeeded;
        this.timeSpent = timeSpent ? timeSpent : 0;
        this.assigned_to = assigned_to;
    }

    static async getTasksByIds(taskIds: string[]){
        const tasks: Task[] = [];
        for(const taskId of taskIds){
            const task = await Task.findTaskById(taskId);
            tasks.push(task);
        }
        return tasks;
    }

    static async findTaskById(taskId: string): Promise<Task>{
        const db = getFirestore();
        const docRef = doc(db, 'tasks',taskId);
        const snapshot = await getDoc(docRef);
        const docJson = snapshot.data();
        const task = new Task(docJson?.title, docJson?.description, docJson?.deadline, docJson?.timeNeeded, docJson?.assigned_to, snapshot.id, docJson?.timeSpent);
        return task;
    }

    async storeTask(){
        const db = getFirestore();
        const snapshot =  await addDoc(collection(db, "tasks"), {
            title: this.title,
            description: this.description,
            deadline: this.deadline,
            timeNeeded: this.timeNeeded,
            timeSpent: this.timeSpent,
            assigned_to: this.assigned_to
        })

        return snapshot.id;
    }
}