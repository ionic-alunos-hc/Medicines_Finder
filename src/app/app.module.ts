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

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MedicinesPage,
    TabsPage,
    BenuronPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MedicinesPage,
    BenuronPage
  ],
  providers: [
    LocalNotifications,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemsProvider,
    ApiProvider
  ]
})
export class AppModule {}
