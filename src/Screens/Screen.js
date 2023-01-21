export class Screen {
    constructor({ name, routerPath, isAsync }) {
        this.isAsync = false;
        this.name = name;
        this.routerPath = routerPath;
        this.isAsync = isAsync;
        this.appContainer = document.getElementById('app');
        this.feedbackContainer = document.getElementById('feedback');
    }
    clearAppContainer() {
        this.appContainer.innerHTML = "";
    }
}
