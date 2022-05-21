export class ValueMoney{
    Tempalte(local,settingsJson,components){
        let elementHtml = "";
        settingsJson.inputMoney().forEach(item => {
            elementHtml += components.spanInputs(item)
        });
        elementHtml += `<div id="vlrTotal"><i>R$</i><label>0,00</label></div>`
        document.querySelector(local).insertAdjacentHTML('beforeend', elementHtml)
    }
}