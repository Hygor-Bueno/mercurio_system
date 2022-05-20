import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";
import { ValueMoney } from "./ValueMoney.js";
import { Settings } from "../Settings/Settings.js";
import { Component } from "../Components/Components.js";
import { Item } from "../Class/Item.js";
import { List } from "../Class/List.js";

export class App {

    useApp() {
        let components = new Component;
        let listItems = new ListItems;
        let item = new Items;
        let value = new ValueMoney;
        let settingsJson = new Settings;
        let listObject = new List(this.loadInformation())

        item.template('#addItemHeader', settingsJson, components);
        listItems.template('#listItensSection', listObject, components);
        value.Tempalte('#calcValueFooter', settingsJson, components)
    }
    loadInformation() {
        let list = {
            list: [
                {
                    id: 1,
                    description: "Limão Thaite",
                    quantity: 0.300,
                    value: 1.99
                },
                {
                    id: 2,
                    description: "Maçã Italiana ip. kg ",
                    quantity: 0.389,
                    value: 999.99
                },
                {
                    id: 3,
                    description: "Bisc. Tortinha",
                    quantity: 1,
                    value: ''
                }
            ]
        }

        !localStorage.getItem('mercurio_list') && localStorage.setItem('mercurio_list', JSON.stringify(list))
        if (localStorage.getItem('mercurio_list')) return this.loadItems(JSON.parse(localStorage.getItem('mercurio_list')))

    }
    loadItems(arrayItems) {
        let list = [];
        arrayItems.list.forEach(item => {
            let object = new Item(item.id, item.description, item.quantity, item.value);
            list.push(object);
        });

        return list;
    }
}