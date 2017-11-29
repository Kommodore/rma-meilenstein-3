import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {GmapProvider} from '../../providers/gmap/gmap';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, private geolocation: Geolocation, private gmap: GmapProvider) {
  }

  ionViewDidLoad(){
    this.gmap.initMap(this.mapElement);
  }

  b_showPosition(){
    this.gmap.showPosition({lat: 53, lng: 9});
  }

}
