import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Screen } from "./Screen";
import User from '../Models/User';

export default class TimerScreen extends Screen {
    timerContainer : HTMLElement;
    user ?: User;
    myProjects?: any;
    constructor(){
        super({name: 'TimerScreen',routerPath:'/timer', isAsync: true});
        this.timerContainer = ElementFactory.createContainer({classNames: ["timerScreen"]});
    }
    async render() {
        this.user = await User.getCurrentUserData();
        this.myProjects = await Project.getProjects(this.user.id);

        const header = ElementFactory.createHeader({headerText:'Timer',user:this.user })!;
        this.timerContainer.append(header);


        return this.timerContainer
    }
}