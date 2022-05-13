import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";

export class App{
    listItems = new ListItems;
    item = new Items;
    useApp(){        
        this.listItems.template('#listItensSection');        
        this.item.template('#addItemHeader');
    }
}