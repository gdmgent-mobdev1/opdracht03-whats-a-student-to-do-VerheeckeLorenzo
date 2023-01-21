import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Authenticator from "../Auth/Authenticator";
import ElementFactory from "../Components/ElementFactory";
import Invite from "../Models/Invite";
import User from "../Models/User";
import { Screen } from "./Screen";
export default class ProfileScreen extends Screen {
    constructor() {
        super({ name: 'Profile', routerPath: '/profile', isAsync: true });
        this.user = null;
        this.profileScreen = ElementFactory.createContainer({ classNames: ['profile-screen'] });
    }
    async render() {
        this.user = await User.getCurrentUserData();
        const allInvites = await Invite.getInvites(this.user.id);
        const header = ElementFactory.createHeader({ headerText: 'Edit Profile', user: this.user, invites: allInvites });
        const formValidation = ElementFactory.createFormValidation();
        const imageInput = ElementFactory.createImageUploader({
            name: 'image',
            id: 'image',
            accept: ['image/png', 'image/jpeg', 'image/jpg'],
            circle: true,
        });
        const usernameInput = ElementFactory.createContainer({
            classNames: ['input-container'],
            children: [
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
            classNames: ['input-container'],
            children: [
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
            className: 'primary-button',
            text: 'Save',
            onClick: async () => {
                const formData = new FormData(document.querySelector('.profile-form'));
                const username = formData.get('username');
                const avatar = formData.get('image');
                // @ts-ignore
                if (avatar?.size !== 0) {
                    // @ts-ignore
                    if (avatar?.type.split('/')[0] === 'image') {
                        const storage = getStorage();
                        // @ts-ignore
                        const storageRef = ref(storage, avatar.name);
                        // @ts-ignore
                        await uploadBytes(storageRef, avatar)
                            .then(() => {
                            getDownloadURL(storageRef).then((url) => {
                                this.user.avatar = url;
                                this.user?.updateUserData();
                            });
                        });
                    }
                    else {
                        new Authenticator().displayError('Please upload an image');
                    }
                }
                if (username) {
                    this.user.username = username;
                }
            }
        });
        const profileForm = ElementFactory.createForm({
            classNames: ['profile-form'],
            children: [
                imageInput,
                usernameInput,
                emailInput,
                saveButton
            ]
        });
        const deleteAccount = ElementFactory.createButton({
            text: 'Delete Account',
            className: 'danger-button-large',
            onClick: async () => {
                await User.deleteCurrentUser();
            }
        });
        this.profileScreen.append(header, formValidation, profileForm, deleteAccount);
        return this.profileScreen;
    }
}
