import { Settinges } from "../Settings/Settings.js";
export class Items {
    settingsJson = new Settinges;
    template(local) {
        let elementHtml = ""
        this.settingsJson.formItem().map(item => {
            elementHtml += 
            `
                <span>
                    <label>${item.title}</label>
                    <input type="${item.type}" 
                        ${item.min ? `min="${item.min}"`:""}
                        ${item.id ? `id="${item.id}"`:""}
                        ${item.class ? `class="${item.class}"`:""}     
                        ${item.enabled ? `enabled="${item.enabled}"`:""}     
                        >
                </span>
            `
        })
        elementHtml += '<button type="button">+</button>'
        document.querySelector(local).insertAdjacentHTML('beforeend', elementHtml)
    }
}