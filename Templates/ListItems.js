export class ListItems{
    template(local,settingsJson){
        let item = `
                    <header>
                        <h1>Lista de Itens: </h1>
                    </header>
                    <article>
                        <ol>
                            ${settingsJson.item().map(item=>{
                                console.log(item)
                            }
                            )}
                        </ol>
                    </article>
                `
        document.querySelector(local).insertAdjacentHTML('beforeend',item)
    }
}