import { ListItems } from "./ListItems.js";

export class App{
    listItems = new ListItems
    useApp(){
        this.listItems.template('#listItensSection');
    }
}