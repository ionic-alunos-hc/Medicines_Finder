import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { OrderPage } from '../order/order';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }
  goOrderPage() {
    this.navCtrl.push(OrderPage)
  }
  goReservePage() {
    //this.navCtrl.setRoot(ReservePage);
  }
}
