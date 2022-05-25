export class Settings {
    formItem() {
        return [
            { title: "Descrição: ", class: "inputTextItem", type: "text", max: 20 },
            { title: "Quantidade: ", class: "inputNumberItem", type: "number", min: 0 },
            { title: "Valor: ", class: "inputNumberItem", type: "number", min: 0 }
        ]
    }
    formButton(){
        return {id:"addItemButton",type:"button",description: "+"}
    }
    listButton(){
        return {id:"clearListButtom",type:"button",title:`Limpar_lista`}
    }
    inputMoney() {
        let max = JSON.parse(localStorage.mercurio_list).maxValue || "";
        return [{ title: "Valor Máx. : ",id:'valueMoneyMax', class: "inputNumberItem", type: "number", min: 0, value: max && max}]
    }
}