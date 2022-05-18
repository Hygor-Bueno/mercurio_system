export class Settings {
    formItem() {
        return [
            { title: "Descrição: ", class: "inputTextItem", type: "text", max: 20 },
            { title: "Quantidade: ", class: "inputNumberItem", type: "number", min: 0 },
            { title: "Valor: ", class: "inputNumberItem", type: "number", min: 0 }
        ]
    }
    inputMoney() {
        return [{ title: "Valor Máx. : ", class: "inputNumberItem", type: "number", min: 0 }]
    }
    item() {
        return [
            {
                id: 1,
                description: { value: "Limão Thaite", type: "text", disabled: true, class: "inputItemList" },
                quantity: {title:'Qtd.', title:'Qtd.',value: 0.300, type: "number", class: "inputvalueList" },
                value: { title: "R$", value: 1.99, type: "number", class: "inputvalueList" }
            },
            {
                id: 2,
                description: { value: "Maçã Italiana ip. kg ", type: "text", disabled: true, class: "inputItemList" },
                quantity: {title:'Qtd.', value: 0.389, type: "number", class: "inputvalueList" },
                value: { title: "R$", value: 999.99, type: "number", class: "inputvalueList" }
            },
            {
                id: 3,
                description: { value: "Bisc. Tortinha", type: "text", disabled: true, class: "inputItemList" },
                quantity: {title:'Qtd.', value: 1, type: "number", class: "inputvalueList" },
                value: { title: "R$", value: 4.99, type: "number", class: "inputvalueList" }
            }
        ]
    }
}