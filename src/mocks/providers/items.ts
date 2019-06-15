import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Brufen",
    "profilePic": "assets/img/speakers/brufen.jpg",
    "about": "Brufen is an anti inflamatory medicine.",
  };


  constructor() {
    let items = [
      {
        "name": "Benuron",
        "profilePic": "assets/imgs/benuron.jpg",
        "about": "",
        "Farmacia1": "30 caixas",
        "Farmacia2": "20 caixas", 
        "Farmacia3": "15 caixas",
      },
      {
        "name": "Nolotil",
        "profilePic": "assets/imgs/nolotil.jpg",
        "about": "",
        "Farmacia1": "45 caixas",
        "Farmacia2": "0 caixas", 
        "Farmacia3": "5 caixas",
      },
      {
        "name": "Valdispert",
        "profilePic": "assets/imgs/valdispert.jpg",
        "about": "",
        "Farmacia1": "0 caixas",
        "Farmacia2": "0 caixas", 
        "Farmacia3": "1 caixas",
      },
      {
        "name": "Brufen",
        "profilePic": "assets/imgs/brufen.jpg",
        "about": "",
        "Farmacia1": "25 caixas",
        "Farmacia2": "25 caixas", 
        "Farmacia3": "50 caixas",
      }


    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
