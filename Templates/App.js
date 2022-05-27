import { Items } from "./Items.js";
import { ListItems } from "./ListItems.js";
import { ValueMoney } from "./ValueMoney.js";
import { Settings } from "../Settings/Settings.js";
import { Component } from "../Components/Components.js";
import { Item } from "../Class/Item.js";
import { List } from "../Class/List.js";
import { Utils } from "../Utils/Utils.js";

export class App {
    listObject;
    itemObject = new Item;
    utils = new Utils;
    constructor() {
        let data = this.loadInformation();
        if (data) { this.listObject = new List(data) }
    }
    useApp() {
        let components = new Component;
        let listItems = new ListItems;
        let item = new Items;
        let value = new ValueMoney;
        let settingsJson = new Settings;

        item.template('#addItemHeader', settingsJson, components, this.listObject, this.itemObject);
        listItems.template('#listItensSection', settingsJson, this.listObject, components, this.steepTitleValue);
        value.Tempalte('#calcValueFooter', settingsJson, components, this.listObject)

        this.listObject.reloadValueTotal();
        document.getElementById('shareList').addEventListener('click', () => { this.shareNow() })
    }
    loadInformation() {
        let list = {
            list: [],
            maxValue: 0
        }
        !localStorage.mercurio_list && localStorage.setItem('mercurio_list', JSON.stringify(list))
        return this.itemObject.loadItems(JSON.parse(localStorage.getItem('mercurio_list')))
    }
    shareNow() {
        let fileArray = new File([`${localStorage.getItem('mercurio_list')}`], "lista.txt", { type: "text/plain", lastModified: Date.now() });
        if (window.navigator && window.navigator.canShare && window.navigator.canShare({ files: [fileArray] })) {
            navigator.share({
                files: [fileArray],
                title: 'Lista de Compras - Oficial',
                text: 'Mercusrio System, auxiliando nas suas compras...'
            }).then(() => {
                console.log('Thanks for sharing!');
            }).catch(console.error);
        }
    }
}