import { Component, ViewChild, ElementRef } from '@angular/core';
import { ViewController, NavController } from 'ionic-angular';
import {GmapProvider} from '../../providers/gmap/gmap';
import {LocationProvider} from '../../providers/location/location';
import {EditActivitiesComponent} from "../activities/edit-activities.component";

@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})
export class MapPage {

  @ViewChild('map') mapElement: ElementRef;

  constructor(private navCtrl: NavController, private viewCtrl: ViewController, private gmap: GmapProvider, private location: LocationProvider) {
  }

  ionViewDidLoad(){
    this.gmap.initMap(this.mapElement);
    if(this.location.startRecoding(this.gmap) == false){
      this.viewCtrl.dismiss();
    }
  }

  stopActivity(){
    this.location.stopRecording();
    let coords = this.location.getCoords();
    let duration = (this.location.duration * coords.length) / 1000;
    console.log(coords);
    this.navCtrl.push(EditActivitiesComponent, {
      type: "Laufen",
      duration: duration,
      coords: coords
    })
    this.viewCtrl.dismiss();
  }

}
