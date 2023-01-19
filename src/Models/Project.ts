import { addDoc, collection, DocumentData, DocumentReference, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { Tag } from './Tag';
import { Task } from './Task';
import User from './User';

export class Project{
  id?: string;
  title: string;
  description: string;
  image: string;
  invitedUsers?: string[]=[''];
  joinedUsers: string[]= [];
  tags?: string[] = [];
  tasks?: Task[] = [];
  constructor( title: string, description: string, image?: string,  tasks?: Task[], tags?: string[],invitedUsers?: string[],id?:string){
      this.id = id;
      this.title = title;
      this.description = description;
      image ? this.image = image : this.image = './assets/defaultProject.png';
      this.invitedUsers = invitedUsers;
      this.tags = tags;
      this.tasks = tasks;
    }

    static async getProjects(userId: string){
      const db = getFirestore();
      const ref = collection(db, 'projects');
      const q = query(ref, where('joinedUsers', 'array-contains', userId));
      const snapshot = await getDocs(q);
      console.log(snapshot);
      return snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()
      }));
  }

  static async findProjectById(projectId: string): Promise<Project>{
    console.log(projectId);
    const db = getFirestore();
    const ref = collection(db, 'projects');
    const q = query(ref, where('id', '==', projectId));
    const snapshot = await getDocs(q);
    const doc = snapshot.docs[0];
    const docJson = doc.data();
    const project = new Project(docJson?.title, docJson?.description, docJson?.img, docJson?.tasks, docJson?.tags, docJson?.invitedUsers, docJson?.id);
    return project;
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
            // tasks: this.tasks,
            // users: this.joinedUsers
        });
        this.id = docRef.id;
  }

}