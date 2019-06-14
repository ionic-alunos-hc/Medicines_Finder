import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private localNotifications: LocalNotifications) {
    this.localNotifications.schedule({
      text: 'Delayed ILocalNotification',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
   });
  }
}
