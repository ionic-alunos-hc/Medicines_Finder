import { Component } from '@angular/core';
import {ToastController , LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';


/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
  item: any;
  currentMedicines: Item[];

  constructor(private toastCtrl: ToastController, public navCtrl: NavController, public medicines: Items, public navParams: NavParams, public loadingController: LoadingController) {
    this.currentMedicines = this.medicines.query();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      content: 'Hellooo',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    console.log('Loading dismissed!');
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      content: 'Aguarde uns momentos enquanto completamos a reserva...',
      //translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    loading.onDidDismiss(()=>{
      this.presentToast();

    });
    return await loading.present();
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Encomendado com sucesso',
      duration: 3000,
      position: 'middle'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}

