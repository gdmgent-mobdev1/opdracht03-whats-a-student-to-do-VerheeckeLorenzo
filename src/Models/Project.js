import { addDoc, collection, doc, getDoc, getDocs, updateDoc, getFirestore, query, where } from 'firebase/firestore';
export class Project {
    constructor(title, description, image, tasks, tags, invitedUsers, id, joinedUsers) {
        this.invitedUsers = [''];
        this.joinedUsers = [''];
        this.tags = [];
        this.tasks = [];
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.invitedUsers = invitedUsers;
        this.tags = tags;
        this.tasks = tasks;
        this.joinedUsers = joinedUsers;
    }
    static async getProjects(userId) {
        const db = getFirestore();
        const ref = collection(db, 'projects');
        const q = query(ref, where('joinedUsers', 'array-contains', userId));
        const snapshot = await getDocs(q);
        return snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }));
    }
    static async findProjectById(projectId) {
        const db = getFirestore();
        const docRef = doc(db, 'projects', projectId);
        const snapshot = await getDoc(docRef);
        const docJson = snapshot.data();
        const project = new Project(docJson?.title, docJson?.description, docJson?.img, docJson?.tasks, docJson?.tags, docJson?.invitedUsers, snapshot.id, docJson?.joinedUsers);
        return project;
    }
    async addUser(userId) {
        this.joinedUsers?.push(userId);
        const db = getFirestore();
        const docRef = doc(db, 'projects', this.id);
        await updateDoc(docRef, {
            joinedUsers: this.joinedUsers
        });
    }
    async storeProject() {
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
    async removeUser(userId) {
        console.log(userId);
        console.log(this.joinedUsers);
        this.joinedUsers = this.joinedUsers?.filter((user) => user !== userId);
        console.log(this.id);
        const db = getFirestore();
        const docRef = doc(db, 'projects', this.id);
        await updateDoc(docRef, {
            joinedUsers: this.joinedUsers
        });
    }
    async addTask(taskId) {
        this.tasks?.push(taskId);
        const db = getFirestore();
        const docRef = doc(db, 'projects', this.id);
        await updateDoc(docRef, {
            tasks: this.tasks
        });
    }
}
