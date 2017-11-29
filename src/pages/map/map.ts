import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GmapProvider} from '../../providers/gmap/gmap';
import {LocalStorageProvider} from "../../providers/local-storage/local-storage";


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(public navCtrl: NavController, private gmap: GmapProvider, public ls: LocalStorageProvider) {
  }

  ionViewDidLoad(){
    this.gmap.initMap(this.mapElement);
  }

  b_showPosition(){
    let coords = this.ls.getStaticData()[0];
    this.gmap.showPosition(coords.coords[0]);
  }

}
