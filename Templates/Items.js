export class Items {
    template(local,settingsJson,components) {
        let elementHtml = ""
        settingsJson.formItem().forEach(item => {
            elementHtml += components.spanInputs(item);
        })
        elementHtml = `<div>${elementHtml}</div>`;
        elementHtml += '<button type="button">+</button>';
        document.querySelector(local).insertAdjacentHTML('beforeend', elementHtml);
    }
}