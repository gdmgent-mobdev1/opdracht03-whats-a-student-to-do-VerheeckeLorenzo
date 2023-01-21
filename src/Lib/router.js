import Navigo from 'navigo';
const Router = {
    router: null,
    getRouter() {
        if (!this.router) {
            // const rootUrl = `${window.location.protocol}//${window.location.host}`;
            this.router = new Navigo('/', false);
        }
        return this.router;
    },
};
export default Router;
