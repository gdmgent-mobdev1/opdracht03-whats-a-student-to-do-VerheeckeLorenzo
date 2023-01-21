import { doc, getDoc } from "firebase/firestore";
import { db } from "../Lib/firebase";
import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Task } from "../Models/Task";
import { Screen } from "./Screen";
import FormValidator from "../Auth/FormValidator";
import User from "../Models/User";
import Invite from "../Models/Invite";
export default class ProjectScreen extends Screen {
    constructor() {
        super({ name: 'ProjectScreen', routerPath: '/project/:id', isAsync: true });
        this.projectId = '';
        this.project = null;
        this.tasks = [];
        this.currentUser = null;
        this.allUsers = [];
        this.projectScreen = ElementFactory.createContainer({ classNames: ["projectScreen"] });
    }
    async render() {
        this.currentUser = await User.getCurrentUserData();
        this.projectId = this.props.id;
        this.project = await Project.findProjectById(this.projectId);
        this.tasks = await Task.getTasksByIds(this.project.tasks);
        this.allUsers = await User.getAllUsers();
        const projectTitle = ElementFactory.createTitle({ text: this.project.title, size: 1 });
        /*
        * HEADER
        */
        // const actionMenu = ElementFactory.createContainer({
        //     classNames: ["action-menu"],
        //     children: [
        //         ElementFactory.createButton({text: "Edit", classNames: ["primary-button"]}),
        //         ElementFactory.createButton({text: "Delete", classNames: ["primary-button"]}),
        //     ]
        // })
        const projectHeader = ElementFactory.createContainer({
            classNames: ["project-header"],
            children: [projectTitle]
        });
        /*
        * CONTENT
        */
        const formValidation = ElementFactory.createFormValidation();
        const taskField = ElementFactory.createContainer({
            classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ text: "Task", htmlFor: "task", classNames: ["input-label"] }),
                ElementFactory.createInput({ type: "text", name: "task", placeholder: "Task", classNames: ["primary-input"] }),
            ]
        });
        const descriptionField = ElementFactory.createContainer({
            classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ text: "Description", htmlFor: "description", classNames: ["input-label"] }),
                ElementFactory.createInput({ type: "text", name: "description", placeholder: "Description", classNames: ["primary-input"] }),
            ]
        });
        const deadlineField = ElementFactory.createContainer({
            classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ text: "Deadline", htmlFor: "deadline", classNames: ["input-label"] }),
                ElementFactory.createInput({ type: "date", name: "deadline", placeholder: "Deadline", classNames: ["primary-input"] }),
            ]
        });
        const assigneeField = ElementFactory.createContainer({
            classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ text: "Assignee", htmlFor: "assignee", classNames: ["input-label"] }),
                ElementFactory.createInput({ type: "text", name: "assignee", placeholder: "Assignee", classNames: ["primary-input"] }),
            ]
        });
        const timeNeededField = ElementFactory.createContainer({
            classNames: ["input-container"],
            children: [
                ElementFactory.createLabel({ text: "Time needed", htmlFor: "timeNeeded", classNames: ["input-label"] }),
                ElementFactory.createInput({ type: "number", name: "timeNeeded", placeholder: "Time needed", classNames: ["primary-input"] }),
            ]
        });
        const createTaskButton = ElementFactory.createButton({
            text: "Create task",
            className: "primary-button",
            onClick: async () => {
                const validator = new FormValidator();
                const allInputs = validator.createTaskValidator();
                const task = new Task(allInputs?.title, allInputs?.description, 
                // @ts-ignore
                allInputs?.deadline, 
                // @ts-ignore
                allInputs?.timeNeeded, allInputs?.assignee);
                task.storeTask()
                    .then((taskId) => { this.project.addTask(taskId); })
                    .then(() => { this.reRender(); })
                    .catch((err) => { console.log(err); });
            }
        });
        const createTaskForm = ElementFactory.createForm({
            classNames: ["create-task-form"],
            children: [
                taskField,
                descriptionField,
                deadlineField,
                assigneeField,
                timeNeededField,
                createTaskButton
            ]
        });
        const projectContent = ElementFactory.createContainer({
            classNames: ["project-content"],
            children: [
                ElementFactory.createTitle({ text: "Create a new task", size: 2 }),
                formValidation,
                createTaskForm,
                ElementFactory.createLineBreak(),
                ElementFactory.createTitle({ text: "Tasks", size: 2 }),
            ]
        });
        if (this.tasks) {
            this.tasks.forEach(async (task) => {
                const taskContainer = ElementFactory.createContainer({
                    classNames: ["task-container"],
                    children: [
                        ElementFactory.createTitle({ text: task.title, size: 3 }),
                        ElementFactory.createParagraph({ text: task.description }),
                        // ElementFactory.createParagraph({text: task!.deadline.toString()}),
                        // ElementFactory.createParagraph({text: task!.assignee}),
                    ]
                });
                projectContent.appendChild(taskContainer);
            });
        }
        else {
            const noTasks = ElementFactory.createParagraph({ text: "No tasks yet, create one above." });
            projectContent.appendChild(noTasks);
        }
        /*
        * SETTINGS
        */
        const projectDescription = ElementFactory.createContainer({
            classNames: ["project-description"],
            children: [
                ElementFactory.createTitle({ text: "Description", size: 2 }),
                ElementFactory.createParagraph({ text: this.project.description }),
                ElementFactory.createLineBreak(),
            ]
        });
        const userOptions = ElementFactory.createContainer({
            classNames: ["user-options", "hidden"],
            id: "user-options",
        });
        const userInput = ElementFactory.createInput({ type: "text", name: "search-users", placeholder: "Search users", classNames: ["primary-input"] });
        userInput.addEventListener("keyup", (e) => {
            const input = e.target;
            if (input.value === "")
                userOptions.classList.add("hidden");
            else
                userOptions.classList.remove("hidden");
            userOptions.innerHTML = "";
            const searchedUsers = this.allUsers.filter((user) => {
                if (this.project.joinedUsers.includes(user.id))
                    return false;
                return user.username.toLowerCase().includes(input.value.toLowerCase());
            });
            searchedUsers.forEach((user) => {
                const userOption = ElementFactory.createContainer({
                    classNames: ["user-option"],
                    innerHTML: user.username,
                });
                userOption.addEventListener("click", (e) => {
                    const invite = new Invite("", this.currentUser.username, user.id, this.project.title);
                    invite.createInvite();
                    this.reRender();
                });
                userOptions.appendChild(userOption);
            });
        });
        const searchUsers = ElementFactory.createContainer({
            classNames: ["search-users"],
            children: [
                ElementFactory.createTitle({ text: "Add users", size: 2 }),
                ElementFactory.createContainer({
                    classNames: ["search-users-dropdown"],
                    children: [
                        userInput,
                        userOptions
                    ]
                })
            ]
        });
        const currentUsers = ElementFactory.createContainer({
            classNames: ["current-users"],
            children: [
                ElementFactory.createTitle({ text: "Current users", size: 2 }),
            ]
        });
        if (this.project.joinedUsers.length > 0) {
            this.project.joinedUsers.forEach(async (user) => {
                const userDoc = await getDoc(doc(db, "users", user));
                const userData = userDoc.data();
                const userContainer = ElementFactory.createContainer({
                    classNames: ["user-container"],
                    children: [
                        ElementFactory.createImage({ url: userData.avatar, alt: 'user avatar', classNames: ["user-image"] }),
                        ElementFactory.createParagraph({ text: userData.username, classNames: ["user-name"] }),
                        ElementFactory.createButton({
                            children: [
                                ElementFactory.createIcon({ classNames: ["fas", "fa-times"] })
                            ],
                            className: "danger-button",
                            onClick: async () => {
                                this.project.removeUser(user)
                                    .then(() => { this.reRender(); });
                            },
                        })
                    ]
                });
                currentUsers.append(userContainer);
            });
        }
        else {
            const noUsers = ElementFactory.createParagraph({ text: "No users yet" });
            currentUsers.append(noUsers);
        }
        const projectSettings = ElementFactory.createContainer({
            classNames: ["project-settings"],
            children: [projectDescription, searchUsers, ElementFactory.createLineBreak(), currentUsers]
        });
        projectHeader.style.background = `url(${this.project.image})`;
        projectHeader.style.backgroundSize = "cover";
        this.projectScreen.append(projectHeader, projectContent, projectSettings);
        return this.projectScreen;
    }
}
