export class ListItems {
    template(local, settingsJson ,listObject, components,steepTitleValue) {
        let item = `
                    <header>
                        <h1>Lista de Itens: </h1>
                        ${components.buttons(settingsJson.listButton())}
                    </header>
                    <article>
                        ${this.listItems(listObject, components)}
                    </article>
                `
        document.querySelector(local).insertAdjacentHTML('beforeend', item)
        this.settings(listObject);
    }
    settings(listObject){
        document.querySelector('#listItensSection article').onchange = () => {
            listObject.updateList(listObject.uploadList());
            listObject.reloadList();
        };
        document.getElementById('clearListButtom').addEventListener('click',()=>{ 
            document.querySelector("#listItensSection  article  ol").innerHTML = "";
            localStorage.removeItem('mercurio_list');
            document.querySelector('#vlrTotal label').innerText = '0.00';
            document.querySelector("#divVlrTotal label b").innerText = "Valor Total:"
            document.querySelector('#valueMoneyMax').value = null;
            listObject.restartList();
        })
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