import User from "./User";

export class Task{
    id: string;
    description: string;
    deadline: Date;
    timeNeeded: number;
    timeSpent: number;
    assigned_to: User[];
    constructor(id: string, description: string, deadline:Date, timeNeeded:number, timeSpent: number, assigned_to: User[]){
        this.id = id;
        this.description = description;
        this.deadline = deadline;
        this.timeNeeded = timeNeeded;
        this.timeSpent = timeSpent;
        this.assigned_to = assigned_to;
    }
}