export class Item {
    #id;
    #description;
    #quantity;
    #value;

    constructor(id,description,quantity,value){ 
        this.#id = id;
        this.#description = description;
        this.#quantity = quantity;
        this.#value = value;
    }

    getId(){ 
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

    setId(id){
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

    itemsMask() {
        return {
            id: this.#id,
            description: { value: this.#description, type: "text", disabled: true, class: "inputItemList" },
            quantity: { title: 'Qtd.', value: this.#quantity, type: "number", class: "inputvalueList" },
            value: { title: "R$", value: this.#value, type: "number", class: "inputvalueList" }
        }
    }
}