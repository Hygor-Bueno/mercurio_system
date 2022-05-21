import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";
import { ValueMoney } from "./ValueMoney.js";
import { Settings } from "../Settings/Settings.js";
import { Component } from "../Components/Components.js";
import { Item } from "../Class/Item.js";
import { List } from "../Class/List.js";

export class App {
    listObject = new List(this.loadInformation())

    useApp() {
        let components = new Component;
        let listItems = new ListItems;
        let item = new Items;
        let value = new ValueMoney;
        let settingsJson = new Settings;

        item.template('#addItemHeader', settingsJson, components);
        listItems.template('#listItensSection', this.listObject, components);
        value.Tempalte('#calcValueFooter', settingsJson, components)
       
        document.getElementById('valueMoneyMax').onchange = () => {this.maxValue()}
   
    }
    loadInformation() {
        let list = {
            list: [
                {
                    id: 1,
                    description: "Limão Thaite",
                    quantity: 0,
                    value: 1.99
                },
                {
                    id: 2,
                    description: "Maçã Italiana ip. kg ",
                    quantity: 0,
                    value: 999.99
                },
                {
                    id: 3,
                    description: "Bisc. Tortinha",
                    quantity: 0,
                    value: 2.5
                }
            ]
        }
        if(!localStorage.getItem('mercurio_list')) {
            localStorage.setItem('mercurio_list', JSON.stringify(list))
        }else if (localStorage.getItem('mercurio_list')) {
            return this.loadItems(JSON.parse(localStorage.getItem('mercurio_list')))
        }
    }
    loadItems(arrayItems) {
        let list = [];
        if(arrayItems['list']){ 
            arrayItems.list.forEach(item => {
                let object = new Item(item.id, item.description, item.quantity, item.value);
                list.push(object);
            });
        }
        return list;
    }
    maxValue(){
        this.listObject.calcValue();
        let valueMax = document.getElementById('valueMoneyMax').value;
        this.listObject.reloadValueTotal((valueMax - this.listObject.getTotalItems()).toFixed(2));
    }
}