export class Settings{
    formItem(){
        return [
                {title:"Descrição: ",class:"inputTextItem", type:"text",max:20},
                {title:"Quantidade: ",class:"inputNumberItem", type:"number", min:0},
                {title:"Valor: ",class:"inputNumberItem", type:"number", min:0}
            ]
    }
    inputMoney(){
        return [{title:"Valor Máx. : ",class:"inputNumberItem", type:"number", min:0}]
    }
    item(){ 
        return [
                {
                    id:1,
                    description:{value:"Limão Thaite",type:"text",enabled:false},
                    quantity:{value:0.300, type:"number"},
                    value:{value:1.99,type:"number"}
                },
                {
                    id:2,
                    description:{value:"Maçã Italiana ip. kg ",type:"text",enabled:false},
                    quantity:{value:0.389, type:"number"},
                    value:{value:14.99,type:"number"}
                },
                {
                    id:3,
                    description:{value:"Bisc. Tortinha",type:"text",enabled:false},
                    quantity:{value:1, type:"number"},
                    value:{value:4.99,type:"number"}
                }
                ]
    }
}