import { Loader } from "../Components/Loader";
class FormValidator {
    constructor() {
        this.errorContainer = document.querySelector('.form-validation');
        this.form = document.querySelector('form');
        this.feedbackContainer = document.getElementById('feedback');
    }
    // displays an error in the errorcontainer
    displayError(error) {
        this.feedbackContainer.removeChild(this.feedbackContainer.lastChild);
        this.errorContainer.classList.remove('hide');
        this.errorContainer.innerHTML = `<small>${error}</small>`;
    }
    // removes the error from the errorcontainer
    removeError() {
        this.errorContainer.classList.add('hide');
        this.errorContainer.innerHTML = '';
    }
    // authenticator for the create event form
    createProjectValidator() {
        this.removeError();
        this.feedbackContainer.appendChild(new Loader().render());
        const formData = new FormData(document.querySelector('.project-create-form'));
        const title = formData.get('title');
        const description = formData.get('description');
        const image = formData.get('image');
        const tags = formData.getAll('tags');
        if (title && description) {
            return {
                title, description, image, tags
            };
        }
        // displays error message when not all fields are filled in
        this.displayError('You have to fill in all required fields to create a project.');
    }
    // authenticator for the create event form
    createTaskValidator() {
        this.removeError();
        this.feedbackContainer.appendChild(new Loader().render());
        const formData = new FormData(document.querySelector('.create-task-form'));
        const title = formData.get('task');
        const description = formData.get('description');
        const deadline = formData.get('deadline');
        const assignee = formData.get('assignee');
        const timeNeeded = formData.get('timeNeeded');
        if (title && description && deadline && assignee && timeNeeded) {
            return {
                title, description, deadline, assignee, timeNeeded
            };
        }
        this.displayError('You have to fill in all fields to create a task.');
    }
}
export default FormValidator;
