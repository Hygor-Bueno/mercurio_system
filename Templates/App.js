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
        this.share() && document.getElementById('shareList').addEventListener('click', () => {
            navigator.share({
                title: 'Blog Fellyph Cintra',
                text: 'Como compartilhar conteúdo com web share API',
                url: 'http://127.0.0.1:5501/index.html',
            })
                .then(() => console.log('Compartilhamento realizado com sucesso'))
                .catch((error) => console.log('Erro no compartilhamento', error));
        })
        this.share();
    }
    loadInformation() {
        let list = {
            list: [],
            maxValue: 0
        }
        !localStorage.mercurio_list && localStorage.setItem('mercurio_list', JSON.stringify(list))
        return this.itemObject.loadItems(JSON.parse(localStorage.getItem('mercurio_list')))
    }
    share() {
        if (navigator.share) {
            return true;
        }

    }
}