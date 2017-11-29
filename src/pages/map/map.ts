import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GmapProvider} from '../../providers/gmap/gmap';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";
import {LocationProvider} from '../../providers/location/location';

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, private gmap: GmapProvider, public ls: LocalStorageProvider, private location: LocationProvider) {
  }

  ionViewDidLoad(){
    this.gmap.initMap(this.mapElement);
    this.location.startRecoding();
  }

  b_showPosition(){
    let temp = this.ls.getStaticData()[0];
    this.gmap.showPosition(temp.coords[0]);
  }

}
