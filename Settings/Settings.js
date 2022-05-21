export class Settings {
    formItem() {
        return [
            { title: "Descrição: ", class: "inputTextItem", type: "text", max: 20 },
            { title: "Quantidade: ", class: "inputNumberItem", type: "number", min: 0 },
            { title: "Valor: ", class: "inputNumberItem", type: "number", min: 0 }
        ]
    }
    inputMoney() {
        return [{ title: "Valor Máx. : ",id:'valueMoneyMax', class: "inputNumberItem", type: "number", min: 0 }]
    }
}