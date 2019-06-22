import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BenuronPage } from '../pages/benuron/benuron';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MedicinesPage } from '../pages/medicines/medicines';
import { ItemsProvider } from '../providers/items/items';
import { ApiProvider } from '../providers/api/api';

import { Items } from '../mocks/providers/items';

import {MedicinesPageModule} from '../pages/medicines/medicines.module';
import {OrderPageModule} from '../pages/order/order.module';
import { OrderPage } from '../pages/order/order';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    //MedicinesPage,
    TabsPage,
    BenuronPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MedicinesPageModule,
    OrderPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MedicinesPage,
    BenuronPage,
    OrderPage
  ],
  providers: [
    ApiProvider,
    Items,
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider,
    ApiProvider
  ]
})
export class AppModule {}
