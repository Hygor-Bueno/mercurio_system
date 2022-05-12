export class ListItems{
    template(local){
        let item = `
                    <header>
                        <h1>Lista de Itens: </h1>
                    </header>
                    <article>
                        <ol>
                            <li>
                            Never
                            </li>
                        </ol>
                    </article>
                `
        document.querySelector(local).insertAdjacentHTML('beforeend',item)
    }
}