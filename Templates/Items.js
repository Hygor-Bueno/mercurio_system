export class Items {
    template(local, settingsJson, components, list, item) {
        let elementHtml = ""
        settingsJson.formItem().forEach(item => {
            elementHtml += components.spanInputs(item);
        })
        elementHtml = `<div>${elementHtml}</div>`;
        elementHtml += components.buttons(settingsJson.formButton())
        document.querySelector(local).insertAdjacentHTML('beforeend', elementHtml);
        this.settings(list, item, components);
    }
    settings(list, item, components) {
        this.settingForm(list, item);
        this.settingButton(list, item, components);
    }
    settingButton(list, item, components) {
        document.getElementById('addItemButton').addEventListener('click', () => {
            if (document.querySelector('#addItemHeader input[type=text]').value) {
                let element = ""
                Object.entries(item.itemsMask()).forEach(itemHtml => {
                    if (itemHtml[0] != 'id') element += components.spanInputs(itemHtml[1])
                })
                item.addItem(item.getId(), element)
                list.addItemList();
                this.cleanForm();
                item.restart();
            }
        })
    }
    settingForm(list, item) {
        const path = "#addItemHeader div"
        document.querySelector(path).onchange = () => {
            let arrayValue = document.querySelectorAll(`${path} span input`);
            item.populateObject(list.lastIdItem(), arrayValue[0].value, arrayValue[1].value, arrayValue[2].value);
        }
    }
    cleanForm() {
        document.querySelectorAll(`#addItemHeader div span input`).forEach(item => {
            item.value = "";
        })
    }
}