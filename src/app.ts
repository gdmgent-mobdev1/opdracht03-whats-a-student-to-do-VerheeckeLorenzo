import { initFirebase } from './Lib/firebase';
import Router from './lib/router';
import { Screen } from './Screens/Screen';

export default class App{
    parent: HTMLElement;
    feedbackContainer: HTMLElement;
    components: Screen[];

    constructor({parent, feedbackContainer}:{parent:HTMLElement, feedbackContainer:HTMLElement}){
        this.parent = parent;
        this.feedbackContainer = feedbackContainer;
        this.components = [];
        initFirebase();
    }


    clearParent() {
      while (this.parent?.firstChild) {
        this.parent.removeChild(this.parent.lastChild);
      }
    }

    clearFeedback() {
      while (this.feedbackContainer.firstChild) {
        this.feedbackContainer.removeChild(this.feedbackContainer.lastChild!);
      }
    }

  // adds the component to the array and to the router
  addComponent(component:any) {
    if (!(component instanceof Screen)) return;

    const { name, routerPath } = component;
    this.components.push(component);

    Router.getRouter().on(
      routerPath,
      (params:any) => {
        this.showComponent({
          name,
          props: params,
        });
      },
    ).resolve();
  }

  // renders the component if the component exists
  showComponent({ name, props }: { name: string, props:any }) {
    const foundComponent = this.components.find((component) => component.name === name);
    if (!foundComponent) return;
    if (props) foundComponent.props = props;
    this.clearParent();


    if(foundComponent.isAsync){
      foundComponent
      .render()
      .then((renderedComponent:HTMLElement) => {
        this.parent.appendChild(renderedComponent);
      })
      .catch((e:Error) => {
        console.error(e.message);
      });
    }else{
      this.parent.appendChild(foundComponent.render());
    }
  }
}