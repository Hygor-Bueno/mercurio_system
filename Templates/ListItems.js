export class ListItems {
    template(local, settingsJson ,listObject, components,steepTitleValue) {
        let item = `
                    <header>
                        <h1>Lista de Itens: </h1>
                        <div id="buttonsListItem">
                            <input id="uploadListInput" type="file" title="Lista de Itens Upload" style="display:none">
                            <label id="uploadListLabel" for="uploadListInput"></label>
                            <button id="shareList" type="button" title="Compartilhar"></button>
                            ${components.buttons(settingsJson.listButton())}
                        </div>
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
        document.getElementById('shareList').addEventListener('click', () => { this.shareNow() });
        var fileSelected =document.getElementById('uploadListInput');
        fileSelected.addEventListener('change',()=>{this.fileReader(fileSelected);});
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
    shareNow() {
        let fileArray = new File([`${localStorage.getItem('mercurio_list')}`], "lista.txt", { type: "text/plain", lastModified: Date.now() });
        if (window.navigator && window.navigator.canShare && window.navigator.canShare({ files: [fileArray] })) {
            navigator.share({
                files: [fileArray],
                title: 'Lista de Compras - Oficial',
                text: 'Mercusrio System, auxiliando nas suas compras...'
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        }
    }
    fileReader(fileSelected){
        var fileExtension = /text.*/;
            var fileTobeRead = fileSelected.files[0];      
            if (fileTobeRead.type.match(fileExtension)) {
                var fileReader = new FileReader();
                fileReader.onload =  ()=> {
                    var fileContents;
                    fileContents = fileReader.result;
                    localStorage.setItem('mercurio_list',fileContents)
                    location.reload();
                }
                fileReader.readAsText(fileTobeRead);
            }
            else {
                console.error("Por favor selecione arquivo texto");
            }
    }
}