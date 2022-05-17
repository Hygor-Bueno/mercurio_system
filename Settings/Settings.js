export class Settings{
    formItem(){
        return [
                {title:"Descrição: ",class:"inputTextItem", type:"text"},
                {title:"Quantidade: ",class:"inputNumberItem", type:"number", min:0},
                {title:"Valor: ",class:"inputNumberItem", type:"number", min:0}
            ]
    }
    inputMoney(){
        return [{title:"Valor Máximo: ",class:"inputNumberItem", type:"number", min:0}]
    }
}