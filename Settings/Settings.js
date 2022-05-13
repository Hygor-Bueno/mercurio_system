export class Settinges{
    formItem(){
        return [
                {title:"Descrição: ", type:"text"},
                {title:"Quantidade: ", type:"number", min:0},
                {title:"Valor: ", type:"number", min:0}
            ]
    }
}