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
    var locations = [
      ['Farmacia Dona Amelia', 38.766889, -9.161139, 0],
      ['Farmacia Douro', 38.763425, -9.157154, 1],
      ['Farmacia Alameda', 38.770099, -9.159703, 2],
      
    ];
     
    var happycode = {
      lat: 38.7668131,
      lng: -9.1620008
      };

    // Map creation - zoom; map centre points to the coordinates at the variable happycode  
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: happycode,
      disableDefaultUI: true
    });

    var marker, i;
    var infowindow = new google.maps.InfoWindow();

    for (i = 0; i < locations.length; i=i+1) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: this.map,
        icon: {            
          url: "../assets/imgs/farmacia.png",
          scaledSize: new google.maps.Size(30, 30)    
        } 
      });
    
      google.maps.event.addListener(marker, "click", (function(marker, i) {
        return function() {
          infowindow.setContent(location[i][0]);
          infowindow.open(this.map, marker);
        } 
      })(marker, i))
    }
    //marcador vermelho no centro do mapa
    var marker = new google.maps.Marker({
      position: happycode,
      map: this.map,
      title: 'My Position!'
    });
  };
   
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