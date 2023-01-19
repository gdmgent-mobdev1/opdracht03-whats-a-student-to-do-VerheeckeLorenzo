import { Component } from "./Component";

export class TextField extends Component{
    textField: HTMLElement;
    constructor(label: string, placeholder: string, type: string){
        super();
        this.textField = this.createTextField(label, placeholder, type);
    }

    public createTextField =(label: string, placeholder: string, type: string):HTMLElement=>{
        const fieldContainer = document.createElement("div");
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = label ? label : "";
        const inputField = document.createElement("input");
        inputField.type = type;
        inputField.placeholder = placeholder;
        fieldContainer.append(fieldLabel, inputField);
        return fieldContainer
    }
}