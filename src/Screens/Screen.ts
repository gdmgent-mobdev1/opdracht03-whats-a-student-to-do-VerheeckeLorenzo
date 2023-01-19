import { getAuth } from "firebase/auth";


export abstract class Screen{
    isAsync : boolean = false;
    name: string;
    routerPath: string;
    appContainer: HTMLElement;
    props: any ;
    constructor({
        name,
        routerPath,
        isAsync
    }:{name:string, routerPath:string, isAsync:boolean}){
        this.name=name;
        this.routerPath=routerPath;
        this.isAsync=isAsync;
        this.appContainer = document.getElementById('app')!;
    }

    clearAppContainer(){
        this.appContainer.innerHTML = "";
    }

    abstract render(): HTMLElement | Promise<HTMLElement>;
}