import ElementFactory from "../Components/ElementFactory";
import User from "../Models/User";
import { Screen } from "./Screen";

export default class ProfileScreen extends Screen {
    profileScreen : HTMLElement;
    user : User|null = null;
    constructor(){
        super({name:'Profile', routerPath:'/profile', isAsync:true});
        this.profileScreen = ElementFactory.createContainer({classNames:['profile-screen']});
    }

    async render(){
        this.user = await User.getCurrentUserData();

        const header = ElementFactory.createHeader({headerText:'Edit Profile',user:this.user })!;
        
        const formValidation = ElementFactory.createFormValidation();

        const imageInput = ElementFactory.createImageUploader({
            name: 'image',
            id: 'image',
            accept: ['image/png', 'image/jpeg', 'image/jpg'],
        });

        const usernameInput = ElementFactory.createContainer({
            classNames:['input-container'],
            children:[
                ElementFactory.createLabel({
                    htmlFor: 'username',
                    text: 'Username',
                    classNames: ['input-label'],
                }),
                ElementFactory.createInput({
                    type: 'text', name: 'username', placeholder: 'Username', classNames: ['primary-input'], value: this.user.username,
                }),
            ]
        });

        const emailInput = ElementFactory.createContainer({
            classNames:['input-container'],
            children:[
                ElementFactory.createLabel({
                    htmlFor: 'email',
                    text: 'Email',
                    classNames: ['input-label'],
                }),
                ElementFactory.createInput({
                    type: 'email', name: 'email', placeholder: 'Email', classNames: ['primary-input'], value: this.user.email, disabled: true,
                }),
            ]
        });

        const saveButton = ElementFactory.createButton({
            className:'primary-button',
            text:'Save',
            onClick: async () => {
                const form = document.querySelector('.profile-form') as HTMLFormElement;
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());
                console.log(data)
                const user = await User.updateUser(data);
                if(user){
                    this.user = user;
                    formValidation.innerHTML = 'Profile updated successfully';
                }else{
                    formValidation.innerHTML = 'Error updating profile';
                }
            }
        });

        const profileForm = ElementFactory.createForm({
            classNames:['profile-form'],
            children:[
                imageInput,
                usernameInput,
                emailInput,
                saveButton
            ]
        })


        this.profileScreen.append(header, formValidation, profileForm);


        return this.profileScreen;
    }
}