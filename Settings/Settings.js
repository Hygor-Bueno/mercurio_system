export class Settings{
    formItem(){
        return [
                {title:"Descrição: ",class:"inputTextItem", type:"text"},
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
                    description:{title:"Limão Thaite",type:"text",enabled:false},
                    quantity:{title:0.300, type:"number"},
                    value:{title:1.99,type:"number"}
                },
                {
                    id:2,
                    description:{title:"Maçã",type:"text",enabled:false},
                    quantity:{title:0.389, type:"number"},
                    value:{title:14.99,type:"number"}
                },
                {
                    id:3,
                    description:{title:"Bisc. Tortinha",type:"text",enabled:false},
                    quantity:{title:1, type:"number"},
                    value:{title:4.99,type:"number"}
                }
                ]
    }
}