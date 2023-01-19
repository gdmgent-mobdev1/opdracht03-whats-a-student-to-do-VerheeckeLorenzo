import { Loader } from "../Components/Loader";

class FormValidator{
    form:HTMLFormElement;
    errorContainer: HTMLElement;
    feedbackContainer: HTMLElement;
    constructor() {
        this.errorContainer = document.querySelector('.form-validation')!;
        this.form=document.querySelector('form') as HTMLFormElement;
        this.feedbackContainer = document.getElementById('feedback')!;
    }

    // displays an error in the errorcontainer
    displayError(error:Error|string) {
        this.feedbackContainer.removeChild(this.feedbackContainer.lastChild!);
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
        const formData = new FormData(document.querySelector('.project-create-form') as HTMLFormElement);
        const title = formData.get('title');
        const description = formData.get('description');
        const image = formData.get('image');
        const invitedUsers = formData.get('invitedUsers');
        const tags = formData.getAll('tags');
        console.log(tags);
        if (title && description) {
        return {
            title, description, image, invitedUsers, tags
        };
        }

        // displays error message when not all fields are filled in
        this.displayError('You have to fill in all required fields to create a project.');
    }
}

export default FormValidator;