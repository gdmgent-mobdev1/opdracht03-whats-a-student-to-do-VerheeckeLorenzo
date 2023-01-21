import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Screen } from "./Screen";
import User from '../Models/User';
import Invite from "../Models/Invite";

export default class TimerScreen extends Screen {
    timerScreen : HTMLElement;
    user ?: User;
    tasks ?: any;
    myProjects?: any;
    constructor(){
        super({name: 'TimerScreen',routerPath:'/timer', isAsync: true});
        this.timerScreen = ElementFactory.createContainer({classNames: ["timerScreen"]});
    }
    async render() {
        this.user = await User.getCurrentUserData();
        this.myProjects = await Project.getProjects(this.user.id);
        const allInvites = await Invite.getInvites(this.user.id);
        
        const header = ElementFactory.createHeader({headerText:'Timer',user:this.user, invites:allInvites })!;

        const time = ElementFactory.createTitle({classNames: ["time"], text: "00:00:00", size: 2})!;

        let seconds=0;
        const timerFunction = setInterval(()=>{
            countUp
        },1000)

        const countUp = () =>{
            seconds++;
            let hour = Math.floor(seconds/3600);
            let minute = Math.floor((seconds - hour*3600)/60);
            let second = seconds - (hour*3600 + minute*60);
            let timeText = `${hour}:${minute}:${second}`
            time.innerText = timeText;
        }

        const formValidation = ElementFactory.createFormValidation();

        const projectOptions = this.myProjects.map((project:Project)=>`${project.title}`);
        const projectDropdown = ElementFactory.createDropdown({classNames: ["projectDropdown"], options: projectOptions, placeholder: "Select a project"})!;

        let selectedTasks:any;

        projectDropdown.addEventListener("change",async (e)=>{
            const input = e.target as HTMLInputElement;
            const val = input.value;
            selectedTasks = this.tasks.filter((task:any)=>task.projectId === val);
        })

        const taskDropdown = ElementFactory.createDropdown({classNames: ["taskDropdown"], options: selectedTasks, placeholder: "Select a task"})!;
        const startButton = ElementFactory.createButton({className: "startButton", text: "Start", onClick: () =>{

        }})!;

        const timerForm = ElementFactory.createForm({classNames: ["timerForm"], children: [formValidation,projectDropdown, taskDropdown, startButton]})!;

        startButton.addEventListener("click", (e) => {
            e.preventDefault();
            timerFunction;
        });

        const stopButton = ElementFactory.createButton({className: "stopButton", text: "Stop",onClick:()=>{
            clearInterval(timerFunction);
        }})!;

        this.timerScreen.append(header, time, timerForm, stopButton);

        return this.timerScreen;
    }
}