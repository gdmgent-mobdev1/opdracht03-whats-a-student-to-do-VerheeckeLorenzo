import { Screen } from "./Screen";
import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import User from "../Models/User";
import { Tag } from "../Models/Tag";
import Notification from "../Models/Notification";

export default class DashboardScreen extends Screen{
    isAsync : boolean = true;
    dashboardScreen : HTMLElement;
    user : User = {} as User;
    userId : string = "";
    projects : any;
    allTags : any;
    notifications : any;
    constructor(){
        super({name: 'DashboardScreen',routerPath:'/dashboard', isAsync: true});
        this.dashboardScreen = ElementFactory.createContainer({classNames: ["dashboardScreen"]});
    }

    async rerender(){
        this.appContainer.innerHTML = "";
        this.render();
    }

    async render(){
        this.allTags = await Tag.getAllTags();
        this.user= await User.getCurrentUserData();
        this.userId = await User.getUserId();
        this.projects = await Project.getProjects(this.userId);
        this.notifications = await Notification.getNotifications(this.userId);

        const header = ElementFactory.createHeader({headerText: "Student's To Do", user: this.user});        

        // Create a calendar
        const calendarTable = ElementFactory.createCalendar({classNames: ["calendar"]})
        const calendar = ElementFactory.createContainer({classNames: ["calendarContainer"], children:[calendarTable]});

        
        // // create a project overview
        const projectOverview = ElementFactory.createContainer({classNames: ["projectOverview"]});
        const projectOverviewTitle = ElementFactory.createTitle({classNames: ["projectOverviewTitle"], text: "My projects", size: 2})!;
        projectOverview.appendChild(projectOverviewTitle);

        // if there are no projects, show a message
        if(this.projects.length === 0){
            const noProjects = ElementFactory.createTitle({classNames: ["noProjects"], text: "You have no projects yet!", size: 2});
            projectOverview.appendChild(noProjects!);
        }else{
            this.projects.forEach((project:Project)=>{
                const arrowIcon = ElementFactory.createIcon({classNames: ["fa","fa-angle-right","arrowIcon"]});
                const projectTitle = ElementFactory.createTitle({classNames: ["projectTitle"], text: project.title, size: 2}) as HTMLHeadingElement;
                const linkToProject = ElementFactory.createLink({href: `/project/${project.id}`,classNames: ["project"], children:[projectTitle,arrowIcon]});
                projectOverview.appendChild(linkToProject);
            })
        }
        
        // Button to create new project
        const plusIcon = ElementFactory.createIcon({classNames: ["fa","fa-plus","createProjectIcon"]});
        const createProjectTitle = ElementFactory.createTitle({classNames: ["createProjectTitle"], text: "Create a new project", size: 2}) as HTMLElement;
        const createProjectEntry = ElementFactory.createLink({href: "./createProject", children:[plusIcon,createProjectTitle] ,classNames: ["newProject","project"]});
        projectOverview.appendChild(createProjectEntry);
        this.dashboardScreen.appendChild(projectOverview);

        // Create a button to time a new task
        const timerButton = ElementFactory.createButton({className: "timerButton", text: "Time a new task", onClick: console.log('ok')});
        const timerTitle = ElementFactory.createTitle({classNames: ["timerTitle"], text: "Time a new task!", size: 2});
        const timerLink = ElementFactory.createLink({href: "/timer", children:[timerButton]});
        const buttonContainer = ElementFactory.createContainer({classNames: ["timerButtonContainer"], children:[timerTitle,timerLink]})

        this.dashboardScreen.append(header, calendar, buttonContainer);
        return this.dashboardScreen;
    }
}
