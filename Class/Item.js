export class Item {
    #id;
    #description;
    #quantity;
    #value;

    constructor(id, description, quantity, value) {
        this.populateObject(id, description, quantity, value)
    }

    getId() {
        return this.#id;
    }
    getDescription() {
        return this.#description;
    }
    getQuantity() {
        return this.#quantity
    }
    getValue() {
        return this.#value
    }

    setId(id) {
        this.#id = id;
    }
    setDescription(description) {
        this.#description = description;
    }
    setQuantity(quantity) {
        this.#quantity = quantity;
    }
    setValue(value) {
        this.#value = value;
    }

    populateObject(id, description, quantity, value) {
        this.#id = id;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = value;
    }

    itemsMask() {
        return {
            id: this.#id,
            description: { value: this.#description, type: "text", disabled: true, class: "inputItemList" },
            quantity: { title: 'Qtd.', value: this.#quantity, type: "number", class: "inputvalueList" },
            value: { title: "R$", value: this.#value, type: "number", class: "inputvalueList" }
        }
    }
    loadItems(arrayItems) {
        let list = [];
        if (arrayItems['list']) {
            arrayItems.list.forEach(item => {
                let object = new Item(item.id, item.description, item.quantity, item.value);
                list.push(object);
            });
        }
        return list;
    }
    addItem(id,element) {
        document.querySelector("#listItensSection article ol").insertAdjacentHTML('beforeend',`<li id="item_${id}">${element}</li>`)
    }
}