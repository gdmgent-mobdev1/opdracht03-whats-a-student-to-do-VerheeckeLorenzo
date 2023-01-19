export abstract class Component{
    classList?: Array<String>;
    id?: String;
    name?: String;
    clickEvent?: Event;
    value?: String;

    constructor(classList?: Array<string>, id?: string, name?: string, clickEvent?: Event, value?: string){
        this.classList = classList;
        this.id = id;
        this.name = name;
        this.clickEvent = clickEvent;
        this.value= value;
    }
}