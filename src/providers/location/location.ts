import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationProvider {

  recordingEnabled: boolean;
  duration: any = 15000;
  inter: any;
  coords: any = [];

  constructor(private geoLocation: Geolocation, private alertCtrl: AlertController) {
    console.log("Locations");
  }

  showError(){
    let alert = this.alertCtrl.create({
      title: 'Location recording disabled',
      subTitle: 'You have to activate recording in the settings first!',
      buttons: ['Dismiss']
    });
    alert.present();
  }

  startRecoding(gmap): boolean{
    if(this.recordingEnabled){
      this.inter = setInterval(dummy =>{
        this.geoLocation.getCurrentPosition().then(pos =>{
            console.log('lat: ' + pos.coords.latitude + ', lng: ' + pos.coords.longitude);
            this.coords.push({lat: pos.coords.latitude, lng: pos.coords.longitude});
            gmap.showPosition({lat: pos.coords.latitude, lng: pos.coords.longitude});
            gmap.addPolyLines(this.coords);
        });
      }, this.duration);
    }else {
      this.showError();
      return false;
    }
    return true;
  }

  stopRecording(){
    clearInterval(this.inter);
  }

  getCoords(): any{
    return this.coords;
  }

  setCoords(){
    this.coords = [];
  }

}
