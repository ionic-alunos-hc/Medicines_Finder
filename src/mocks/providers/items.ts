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
        "profilePic": "assets/img/speakers/benuron.jpg",
        "about": "Benuron is for headaches"
      },
      {
        "name": "Nolotil",
        "profilePic": "assets/img/speakers/nolotil.jpg",
        "about": "Nolotil is for"
      },
      {
        "name": "Valdisert",
        "profilePic": "assets/img/speakers/valdispert.jpg",
        "about": "Valdispert is for"
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
