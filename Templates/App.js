import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";

export class App{
    listItems = new ListItems;
    item = new Items;
    useApp(){        
        this.item.template('#addItemHeader');
        this.listItems.template('#listItensSection');        
    }
}