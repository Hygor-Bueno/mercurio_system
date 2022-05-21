export class List{
    #description;
    #items;
    #totalItems;

    constructor(items){
        this.#items = items
    }

    getDescription() { return this.#description};
    getItems() { return this.#items};
    getTotalItems() { return this.#totalItems};

    setDescription(description) { this.#description = description};
    setItems(items) { this.#items = items};
    setTotalItems(totalItems) { this.#totalItems = totalItems};

    listGeneral(items) {
        let listLocal = items || this.#items;
        let req = []
        listLocal.forEach(item => {
            req.push(item.itemsMask())
        })
        return req;
    }
    
    calcValue(){
        let total=0;
        this.#items.forEach(item=>{
            total += (item.getQuantity() * item.getValue())
        })
        this.#totalItems = total.toFixed(2);
    }

    reloadValueTotal(value){ 
        document.querySelector('#vlrTotal label').innerText = value;
    }
}