import ElementFactory from "../Components/ElementFactory";
import { Project } from "../Models/Project";
import { Screen } from "./Screen";
import User from "../Models/User";
import FormValidator from "../Auth/FormValidator";
import { Tag } from "../Models/Tag";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
export default class CreateProjectScreen extends Screen {
    constructor() {
        super({ name: 'CreateProjectScreen', routerPath: '/createProject', isAsync: true });
        this.project = null;
        this.tasks = [];
        this.allUsers = [];
        this.createProjectScreen = ElementFactory.createContainer({ classNames: ["createProjectScreen"] });
    }
    async render() {
        this.currentUser = await User.getCurrentUserData();
        this.allUsers = await User.getAllUsers();
        this.allTags = await Tag.getAllTags();
        const header = ElementFactory.createHeader({ headerText: 'Create a new project', user: this.currentUser });
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
        const imageInput = ElementFactory.createContainer({
            classNames: ['input-container'],
            children: [
                ElementFactory.createLabel({
                    htmlFor: 'image',
                    text: 'Project banner',
                    classNames: ['input-label'],
                }),
                ElementFactory.createImageUploader({
                    name: 'image',
                    id: 'image',
                    accept: ['image/png', 'image/jpeg', 'image/jpg'],
                }),
            ]
        });
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
        const tagsInput = ElementFactory.createContainer({ classNames: ['tags'] });
        // for the tags input, we need to get a list of all tags in the database
        const tagsContainer = ElementFactory.createContainer({ classNames: ['tags-container'] });
        const tagsParagraph = ElementFactory.createParagraph({ text: 'Tags', classNames: ['tags-paragraph'] });
        tagsInput.appendChild(tagsParagraph);
        this.allTags.forEach((tag) => {
            const tagLabel = ElementFactory.createLabel({ htmlFor: tag.name, text: tag.name, classNames: ['tag-label'] });
            tagLabel.style.borderColor = tag.color;
            const tagCheckbox = ElementFactory.createInput({ id: tag.name, type: 'checkbox', name: "tags", value: tag.name, classNames: ['tag-checkbox'] });
            tagCheckbox.addEventListener('change', (e) => {
                if (tagCheckbox.checked) {
                    tagLabel.style.backgroundColor = tag.color;
                }
                else {
                    tagLabel.style.backgroundColor = 'transparent';
                }
            });
            const singleTagContainer = ElementFactory.createContainer({ classNames: ['single-tag-container'], children: [tagCheckbox, tagLabel] });
            tagsContainer.appendChild(singleTagContainer);
        });
        tagsInput.append(tagsContainer);
        const createProjectForm = ElementFactory.createForm({
            classNames: ['project-create-form'],
            children: [imageInput, tagsInput, titleInput, descriptionInput],
        });
        // create button to create project
        const createProjectButton = ElementFactory.createButton({
            text: 'Create Project',
            className: 'primary-button',
            onClick: async () => {
                const validator = new FormValidator();
                const allInputs = validator.createProjectValidator();
                const avatar = allInputs?.image;
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
                                const project = new Project(allInputs?.title, allInputs?.description, url, [], allInputs?.tags);
                                project.joinedUsers = [this.currentUser.id];
                                project.storeProject()
                                    .then(() => { window.location.replace(`/project/${project.id}`); });
                            });
                        });
                    }
                    else {
                        formValidation.innerHTML = 'Please upload an image';
                    }
                }
            },
        });
        this.createProjectScreen.append(header, formValidation, createProjectForm, createProjectButton);
        return this.createProjectScreen;
    }
}
