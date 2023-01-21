import App from './app';
import { LoginScreen, ProjectScreen, DashboardScreen, RegisterScreen, ProfileScreen, CreateProjectScreen, TimerScreen } from './Screens';
const initApp = () => {
    const mainApp = document.getElementById('app');
    const feedbackContainer = document.getElementById('feedback');
    const app = new App({ parent: mainApp, feedbackContainer: feedbackContainer });
    app.addComponent(new LoginScreen());
    app.addComponent(new RegisterScreen());
    app.addComponent(new DashboardScreen());
    app.addComponent(new TimerScreen());
    app.addComponent(new CreateProjectScreen());
    app.addComponent(new ProjectScreen());
    app.addComponent(new ProfileScreen());
    // In comment now, factory to create some default tags
    // app.addComponent(new FactoryTags())
    // Notification API to send notifications in case you get invited to join a project
    Notification.requestPermission();
};
window.addEventListener('load', initApp);
