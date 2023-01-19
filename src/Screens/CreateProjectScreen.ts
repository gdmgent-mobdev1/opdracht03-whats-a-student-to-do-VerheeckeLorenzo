import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Task } from "../Models/Task";
import { Screen } from "./Screen";
import User from "../Models/User";
import FormValidator from "../Auth/FormValidator";
import { Tag } from "../Models/Tag";

export default class CreateProjectScreen extends Screen{
    project : Project|null = null;
    currentUser ?: User;
    tasks : Task[] = [];
    allTags : any;
    allUsers : User[] = [];
    createProjectScreen : HTMLElement | any;
    constructor(){
        super({name: 'CreateProjectScreen',routerPath:'/createProject', isAsync: true});
        this.createProjectScreen = ElementFactory.createContainer({classNames: ["createProjectScreen"]});
    }
    async render() {
      this.currentUser = await User.getCurrentUserData();
        this.allUsers = await User.getAllUsers();
        this.allTags = await Tag.getAllTags();

        const header = ElementFactory.createHeader({headerText: 'Create a new project', user: this.currentUser});

        const formValidation = ElementFactory.createFormValidation();

        // create inputs (title of project, description of project, deadline of project, users to assign to project)
        const titleInput = ElementFactory.createContainer({
            classNames: ['input-container'],
            children: [
                ElementFactory.createLabel({
                    htmlFor: 'title',
                    text: 'Project title',
                    classNames: ['input-label'],
                }),
              ElementFactory.createInput({
                type: 'text', name: 'title', placeholder: 'Title', classNames: ['primary-input'], required: true,
              }),
            ],
          });

          // create an input to upload an image for the project
          const imageInput = ElementFactory.createImageUploader({
            name: 'image',
            id: 'image',
            accept: ['image/png', 'image/jpeg', 'image/jpg'],
          })



        const descriptionInput = ElementFactory.createContainer({
            classNames: ['input-container'],
            children: [
              ElementFactory.createLabel({
                htmlFor: 'description',
                text: 'Description',
                classNames: ['input-label'],
            }),
              ElementFactory.createInput({
                type: 'text', name: 'description', placeholder: 'Description', classNames: ['primary-input'], required: true,
              }),
            ],
          });



          const tagsInput = ElementFactory.createContainer({classNames: ['tags']})
          // for the tags input, we need to get a list of all tags in the database
          const tagsContainer = ElementFactory.createContainer({classNames:['tags-container']});

          const tagsParagraph = ElementFactory.createParagraph({text:'Tags', classNames:['tags-paragraph']});
          tagsInput.appendChild(tagsParagraph);
          this.allTags.forEach((tag:any) => {
            const tagLabel = ElementFactory.createLabel({htmlFor:tag.name,text:tag.name, classNames:['tag-label']});
            tagLabel.style.borderColor= tag.color;
            const tagCheckbox = ElementFactory.createInput({id:tag.name,type:'checkbox', name:"tags", value:tag.name, classNames:['tag-checkbox']})
            const singleTagContainer = ElementFactory.createContainer({classNames:['single-tag-container'], children:[ tagCheckbox,tagLabel]});
            tagsContainer.appendChild(singleTagContainer);
          });
          
          

          // for the users input, we need to create a list of all users in the database
          // and then create a dropdown menu with all the users
          const usersLabel = ElementFactory.createLabel({htmlFor:'users', text:'Invite users', classNames:['input-label']})
          const usersField = ElementFactory.createInput({
            type: 'text', name: 'users', placeholder: 'Users', classNames: ['primary-input'],
          })
          const allUsers = await User.getAllUsers();
          const usersDropdown = ElementFactory.createContainer({classNames:['users-dropdown']});
          usersField.autocomplete = 'off';
          usersField.onkeyup = (e: KeyboardEvent) => {
            let userSearchValue = usersField.value;
            console.log(userSearchValue);
            if(userSearchValue===''){
              usersDropdown.innerHTML = '';
              return;
            }else{
              usersDropdown.innerHTML = '';
              const filteredUsers = allUsers.filter(user => user.username.includes(userSearchValue));
              filteredUsers.forEach(user => {
                const userOption = ElementFactory.createContainer({classNames:['user-option'], children:[ElementFactory.createTitle({text:user.username, size:3})]});
                usersDropdown.append(userOption);
              });
            }
            
          }

        const usersInput = ElementFactory.createContainer({
            classNames: ['input-container'],
            children: [
              usersLabel,
              usersField,
            ],
          });

          const createProjectForm = ElementFactory.createForm({
            classNames: ['project-create-form'],
            children: [titleInput, descriptionInput, usersInput, tagsContainer],
          })


        // create button to create project
        const createProjectButton = ElementFactory.createButton({
            text: 'Create Project',
            className: 'primary-button',
            onClick: async () => {
              const validator = new FormValidator();
              const allInputs = validator.createProjectValidator();
              const project = new Project(
                allInputs?.title as string,
                allInputs?.description as string,
                allInputs?.image as string,
                [],
                allInputs?.tags as string[],
                
                );
                project.joinedUsers = [this.currentUser!.id]
                console.log(project);
                await project.storeProject()
                .then(()=>{window.location.replace(`/project/${project.id}`)});
            }});  

        this.createProjectScreen.append(header, formValidation, createProjectForm, usersDropdown, createProjectButton);
        return this.createProjectScreen
    }
}