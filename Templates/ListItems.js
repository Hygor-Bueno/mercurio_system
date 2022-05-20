export class ListItems {
    template(local, listObject, components) {
        console.log(listObject,components);
        let item = `
                    <header>
                        <h1>Lista de Itens: </h1>
                    </header>
                    <article>
                        ${this.listItems(listObject, components)}
                    </article>
                `
        document.querySelector(local).insertAdjacentHTML('beforeend', item)
    }
    listItems(listObject, components) {
        try {
            return `
                    <ol>
                        ${listObject.listGeneral().map(item => {
                            let elementHtml = ""
                            let idItem = 0;
                            Object.entries(item).forEach(element => {
                                element[0] == 'id' ? idItem = element[1] : "";
                                element[0] != 'id' ? elementHtml += components.spanInputs(element[1]) : "";
                            })
                            return `<li id="item_${idItem}" >${elementHtml}</li>`;
                        }).join('')}
                    </ol>
                `
        } catch (error) {
            console.error(error);
            return ""
        }
    }
}