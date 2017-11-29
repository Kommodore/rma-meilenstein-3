import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import 'rxjs/add/operator/map';

@Injectable()
export class LocationProvider {

  duration: any = 15000;
  inter: any;

  constructor(public geoLocation: Geolocation) {
    console.log("Locations");
  }

  startRecoding(){
    this.inter = setInterval(dummy =>{
      this.geoLocation.getCurrentPosition().then(pos =>{
          console.log('lat: ' + pos.coords.latitude + ', lng: ' + pos.coords.longitude);
          console.log(this.duration);
      });
    }, this.duration);

  }

  stopRecording(){
    clearInterval(this.inter);
  }

}
