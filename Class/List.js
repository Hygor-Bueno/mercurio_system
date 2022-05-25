import { Item } from "./Item.js";

export class List extends Item {
    #description;
    #items;
    #totalItems;
    #valueMax = 0;

    constructor(items) {
        super();
        this.#items = items
        this.#valueMax = JSON.parse(localStorage.mercurio_list).maxValue || 0
    }

    getDescription() { return this.#description };
    getItems() { return this.#items };
    getTotalItems() { return this.#totalItems };
    getValueMax() { return this.#valueMax };

    setDescription(description) { this.#description = description };
    setItems(items) { this.#items = items };
    setTotalItems(totalItems) { this.#totalItems = totalItems };
    setValueMax(valueMax) {
        console.log(valueMax, this.#items)
        this.#valueMax = valueMax;
        let listJson = JSON.parse(localStorage.getItem('mercurio_list')) || { list: [], maxValue: 0 }
        listJson.maxValue = this.#valueMax;
        this.updateList(listJson);
        this.reloadValueTotal();
    };

    listGeneral(items) {
        let listLocal = items || this.#items;
        let req = []
        listLocal.forEach(item => {
            req.push(item.itemsMask())
        })
        return req;
    }
    calcValue() {
        let total = 0;
        this.#items.forEach(item => {
            total += (item.getQuantity() * item.getValue())
        })
        this.#totalItems = total.toFixed(2);
    }
    reloadValueTotal() {
        let calc;
        this.calcValue();
        if (this.#valueMax > 0) {
            calc = this.#valueMax - this.#totalItems;
        } else {
            calc = this.#totalItems;
        }
        document.querySelector('#vlrTotal label').innerText = parseFloat(calc).toFixed(2);
    }
    updateList(list) {
        localStorage.setItem('mercurio_list', JSON.stringify(list))
    }
    reloadList() {
        let list = [];
        let listJson = JSON.parse(localStorage.getItem('mercurio_list'))['list']
        if (listJson) {
            listJson.forEach(item => {
                let object = new Item(item.id, item.description, item.quantity, item.value);
                list.push(object);
            });
        }
        this.setItems(list)
        this.reloadValueTotal();
    }
    uploadList() {
        let arrayList = [];
        document.querySelectorAll('#listItensSection article ol li').forEach(item => {
            let idItem = item.id.split('_')[1];
            let description = document.querySelector(`#${item.id} :nth-child(1) input`).value;
            let quantity = document.querySelector(`#${item.id} :nth-child(2) input`).value;
            let value = document.querySelector(`#${item.id} :nth-child(3) input`).value;
            arrayList.push(
                {
                    id: idItem,
                    description: description,
                    quantity: parseFloat(quantity),
                    value: parseFloat(value)
                }
            );
        })
        return { list: arrayList, maxValue: this.#valueMax }
    }
    lastIdItem() {
        let assistent = 0;
        this.#items.forEach(item => {
            if (item.getId() > assistent) assistent = parseInt(item.getId());
        })
        return assistent + 1;
    }
    addItemList() {
        this.updateList(this.uploadList());
        this.reloadList();
    }
    restartList() {
        this.#description="";
        this.#items=[];
        this.#totalItems=0;
        this.#valueMax = 0;
    }
}