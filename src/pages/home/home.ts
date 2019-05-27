import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  

  constructor(public navCtrl: NavController,  platform: Platform){
    platform.ready().then(() => {
      this.initMap();
    }) 
  }
  //Variavel HappyCode - Initial Location
  initMap(){
    var locations=[
      ['Farmacia Dona Amelia',38.766889, -9.161139],
    ];
    var happycode = {
      lat: 38.736845,
      lng: -9.137990
      };

    // Map creation - zoom; map centre points to the coordinates at the variable happycode  
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: happycode,
      disableDefaultUI: true
    });
    //marcador vermelho no centro do mapa
    var marker = new google.maps.Marker({
      position: happycode,
      map: this.map,
      title: 'My Position!'
    });
  }
  /*
  calculateAndDisplayRoute() {
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING'
      }, (response, status) => {
        if (status === 'OK') {
          this.directionsDisplay.setDirections(response);
        } 
        else {
          window.alert('Directions request failed due to ' + status);
        }
        });
  
  }*/

}