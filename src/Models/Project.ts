import { addDoc, collection, doc, getDoc, getDocs, updateDoc, getFirestore, query, where } from 'firebase/firestore';
import { Task } from './Task';

export class Project{
  id?: string;
  title: string;
  description: string;
  image?: string;
  invitedUsers?: string[]=[''];
  joinedUsers?: string[]= [''];
  tags?: string[] = [];
  tasks?: string[] = [];
  constructor( title: string, description: string, image?: string,  tasks?: string[], tags?: string[],invitedUsers?: string[],id?:string, joinedUsers?: string[]){
      this.id = id;
      this.title = title;
      this.description = description;
      this.image = image;
      this.invitedUsers = invitedUsers;
      this.tags = tags;
      this.tasks = tasks;
      this.joinedUsers = joinedUsers;
    }

    static async getProjects(userId: string){
      const db = getFirestore();
      const ref = collection(db, 'projects');
      const q = query(ref, where('joinedUsers', 'array-contains', userId));
      const snapshot = await getDocs(q);
      return snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }));
  }

  static async findProjectById(projectId: string): Promise<Project>{
    const db = getFirestore();
    const docRef = doc(db, 'projects',projectId);
    const snapshot = await getDoc(docRef);
    const docJson = snapshot.data();
    const project = new Project(docJson?.title, docJson?.description, docJson?.img, docJson?.tasks, docJson?.tags, docJson?.invitedUsers, snapshot.id, docJson?.joinedUsers);
    return project;
  }

  async addUser(userId:string){
    this.joinedUsers?.push(userId);
    const db = getFirestore();
    const docRef = doc(db, 'projects', this.id!);
    await updateDoc(docRef,{
      joinedUsers: this.joinedUsers
    });
  }

  async storeProject(){
        const db = getFirestore();
        const ref = collection(db, 'projects');
        const docRef = await addDoc(ref, {
            title: this.title,
            description: this.description,
            img: this.image,
            // invitedUsers: this.invitedUsers,
            joinedUsers: this.joinedUsers,
            tags: this.tags,
            tasks: this.tasks,
            // users: this.joinedUsers
        });
        this.id = docRef.id;
  }

  async removeUser(userId:string){
    console.log(userId);
    console.log(this.joinedUsers);
    this.joinedUsers = this.joinedUsers?.filter((user)=>user!==userId);
    console.log(this.id);
    const db = getFirestore();
    const docRef = doc(db, 'projects', this.id!);
    await updateDoc(docRef,{
      joinedUsers: this.joinedUsers
    });
  }

  async addTask(taskId:string){
    this.tasks?.push(taskId);
    const db = getFirestore();
    const docRef = doc(db, 'projects', this.id!);
    await updateDoc(docRef,{
      tasks: this.tasks
    });
  }

}