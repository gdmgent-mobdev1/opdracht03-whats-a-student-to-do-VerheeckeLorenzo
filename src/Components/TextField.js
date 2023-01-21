import { Component } from "./Component";
export class TextField extends Component {
    constructor(label, placeholder, type) {
        super();
        this.createTextField = (label, placeholder, type) => {
            const fieldContainer = document.createElement("div");
            const fieldLabel = document.createElement("label");
            fieldLabel.textContent = label ? label : "";
            const inputField = document.createElement("input");
            inputField.type = type;
            inputField.placeholder = placeholder;
            fieldContainer.append(fieldLabel, inputField);
            return fieldContainer;
        };
        this.textField = this.createTextField(label, placeholder, type);
    }
}
