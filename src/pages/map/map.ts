import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
  }

  ionViewDidLoad(){
    this.initMap();
  }

  initMap() {
    this.geolocation.getCurrentPosition().then(pos => {
      this.map = new google.maps.Map(this.mapElement.nativeElement, {
        zoom: 7,
        center: {lat:  pos.coords.latitude, lng:  pos.coords.longitude}
      });
    });
  }

  showYourLoaction(){
    this.geolocation.getCurrentPosition().then(pos => {
      console.log('lat: ' + pos.coords.latitude + ', lon: ' + pos.coords.longitude);
      this.map.panTo({lat: pos.coords.latitude, lng: pos.coords.longitude});
      this.map.setZoom(14);
    });
  }

}
