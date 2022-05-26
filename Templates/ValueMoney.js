export class ValueMoney{
    Tempalte(local,settingsJson,components){
        let elementHtml = "";
        settingsJson.inputMoney().forEach(item => {
            elementHtml += components.spanInputs(item)
        });
        elementHtml += `<div id="divVlrTotal">
                            <label><b>Valor Total: </b></label>
                            <div id="vlrTotal">                            
                                <i>R$</i><label>0,00</label>
                            </div>
                        </div>`
        document.querySelector(local).insertAdjacentHTML('beforeend', `${elementHtml}`)
    }
}