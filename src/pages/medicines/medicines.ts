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

  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.medicamentos = ['benuron', 'nolotil','flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 0; i < 11; i++) {
      this.items.push({
        title: this.medicamentos[i],
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    } 
  
  }


  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(BenuronPage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicinesPage');
  }

}
