
import App from './app';
import { LoginScreen,ProjectScreen, DashboardScreen, RegisterScreen,FactoryTags,ProfileScreen,CreateProjectScreen, TimerScreen } from './Screens';

const initApp = () => {
    const mainApp = document.getElementById('app')!;
    const feedbackContainer = document.getElementById('feedback')!;
    const app = new App({parent: mainApp, feedbackContainer: feedbackContainer});
    app.addComponent(new LoginScreen());
    app.addComponent(new RegisterScreen());
    app.addComponent(new DashboardScreen());
    app.addComponent(new TimerScreen());
    app.addComponent(new CreateProjectScreen());
    app.addComponent(new ProjectScreen());
    app.addComponent(new FactoryTags())
    app.addComponent(new ProfileScreen());
}


window.addEventListener('load', initApp)