import { collection, doc, DocumentData, DocumentReference, getDoc, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../Lib/firebase";
import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Task } from "../Models/Task";
import { Screen } from "./Screen";

export default class ProjectScreen extends Screen{
    projectId: string='';
    project : Project|null = null;
    tasks : Task[] = [];
    projectScreen : HTMLElement | any;
    constructor(){
        super({name: 'ProjectScreen',routerPath:'/project/:id', isAsync: true});
        this.projectScreen = ElementFactory.createContainer({classNames: ["projectScreen"]});
    }
    async render(){
        this.projectId = this.props.data.id;
        this.project = await Project.findProjectById(this.projectId);
        console.log(this.project);
        // this.getProjectDetails();
        return this.projectScreen;
    }

    // getProjectDetails(){
    //     const reference = doc(db, "projects", this.project?.id!);
    //     getDoc(reference).then((res) => {
    //         const docJson = res.data();
    //         this.project = new Project(res.id, docJson?.title, docJson?.description, docJson?.img, docJson?.tags, docJson?.tasks)
    //         docJson?.tasks.forEach((task: DocumentReference<DocumentData>) => {
    //            getDoc(task).then((res) => {
    //             const taskJson = res.data();
    //             const task = new Task(res.id, taskJson?.description, taskJson?.deadline, taskJson?.timeNeeded, taskJson?.timeSpent, taskJson?.assignedUsers)
    //             this.tasks.push(task);
    //            }).then(()=>{this.renderProject()})
    //         });
    //     });
    // }

    // renderProject(){
    //     const projectTitle = ElementFactory.createTitle({text:this.project!.title,size:1});
    //     const projectDescription = ElementFactory.createParagraph({text:this.project!.description});
    //     this.projectScreen.append(projectTitle, projectDescription);
    //     this.tasks.forEach((task)=>{
    //         const taskDescription = ElementFactory.createTitle({text:task.description,size:2});
    //         this.projectScreen.append( taskDescription);
    //     });
    // }

}
