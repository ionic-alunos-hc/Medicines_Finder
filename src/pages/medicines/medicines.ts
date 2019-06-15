import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BenuronPage } from '../benuron/benuron';

import { Item } from '../../models/item';
import { Items } from '../../providers';

/**
 * Generated class for the MedicinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medicines',
  templateUrl: 'medicines.html',
})



export class MedicinesPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  medicamentos: string[];
  currentMedicines: Item[];


  constructor(public navCtrl: NavController, public medicines: Items, public navParams: NavParams) {
    this.currentMedicines = this.medicines.query();

    // If we navigated to this page, we will have an item available as a nav param
    //this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    //this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];
    //this.medicamentos = ['Benuron', 'Nolotil','flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane','american-football', 'boat', 'bluetooth', 'build'];

    /*
    this.items = [];
    for (let i = 0; i < 11; i++) {
      this.items.push({
        title: this.medicamentos[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    } */
  
  }


  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  /*itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BenuronPage, {
      item: item
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinesPage');
  }

}
