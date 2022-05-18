import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";
import { ValueMoney } from "./ValueMoney.js";
import { Settings } from "../Settings/Settings.js";
import { Component } from "../Components/Components.js";

export class App{
    listItems = new ListItems;
    item = new Items;
    value = new ValueMoney;
    settingsJson = new Settings;
    components = new Component;
    useApp(){ 
        this.item.template('#addItemHeader',this.settingsJson,this.components);
        this.listItems.template('#listItensSection',this.settingsJson,this.components); 
        this.value.Tempalte('#calcValueFooter',this.settingsJson,this.components)
    }
    loadInformation(){
        !localStorage.getItem('mercurio_list') && localStorage.setItem('mercurio_list',"")
    }
}