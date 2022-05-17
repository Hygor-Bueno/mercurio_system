export class List{
    #description;
    #items;
    #totalItems;

    getDescription() { return this.#description};
    getItems() { return this.#items};
    getTotalItems() { return this.#totalItems};

    setDescription(description) { this.#description = description};
    setItems(items) { this.#items = items};
    setTotalItems(totalItems) { this.#totalItems = totalItems};

    
}