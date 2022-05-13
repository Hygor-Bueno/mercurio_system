export class Settinges{
    formItem(){
        return [
                {title:"Descrição: ",class:"inputTextItem", type:"text"},
                {title:"Quantidade: ",class:"inputNumberItem", type:"number", min:0},
                {title:"Valor: ",class:"inputNumberItem", type:"number", min:0}
            ]
    }
}