export class ValueMoney{
    Tempalte(local,settingsJson,components,listObject){
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
        this.settings(listObject);
    }
    settings(listObject){
        document.getElementById('valueMoneyMax').onchange = () => {
            listObject.setValueMax(document.getElementById('valueMoneyMax').value);
            this.steepTitleValue();
        };
    }
    steepTitleValue() {
        document.getElementById('valueMoneyMax').value ?
            document.querySelector("#divVlrTotal label b").innerText = "Valor Restante:"
            :
            document.querySelector("#divVlrTotal label b").innerText = "Valor Total:"
    }
}