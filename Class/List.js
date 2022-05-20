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
    
}