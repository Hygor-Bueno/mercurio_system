export class Items {
    template(local, settingsJson, components, list, item) {
        let elementHtml = ""
        settingsJson.formItem().forEach(item => {
            elementHtml += components.spanInputs(item);
        })
        elementHtml = `<div>${elementHtml}</div>`;
        elementHtml += components.buttons(settingsJson.formButton())
        document.querySelector(local).insertAdjacentHTML('beforeend', elementHtml);

        this.settings(list, item);

    }
    settings(list, item) {
        this.settingForm(list, item);
        this.settingButton(list, item);
    }
    cleanForm() {
        document.querySelectorAll(`#addItemHeader div span input`).forEach(item => {
            console.log(item);
            item.value = "";
        })
    }
    settingButton(list, item) {
        document.getElementById('addItemButton').addEventListener('click', () => {
            let element = ""
            Object.entries(item.itemsMask()).forEach(itemHtml => {
                if (itemHtml[0] != 'id') element += components.spanInputs(itemHtml[1])
            })
            item.addItem(item.getId(), element)
            list.addItemList();
            this.cleanForm()
        })
    }
    settingForm(list, item) {
        const path = "#addItemHeader div"
        document.querySelector(path).onchange = () => {
            let arrayValue = document.querySelectorAll(`${path} span input`);
            item.populateObject(list.lastIdItem(), arrayValue[0].value, arrayValue[1].value, arrayValue[2].value);
        }
    }


}